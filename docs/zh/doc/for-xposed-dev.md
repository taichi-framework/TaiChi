# 如何适配？

::: tip
阅读本文档之前，请先阅读[开发指南](how-to-debug)
:::

理论上讲，只要你不使用 Xposed 特殊的内部特性，基本上是可以无缝适配的。但是，有一些特殊情况需要处理一下：

## 方法拦截/Hook

太极的方法拦截/Hook 特性没有 Xposed 全 s 面，有一些 Hook 是有问题的；需要自己检查一下：

### 超短方法

如果方法体太短，太极在某些机型上可能无法 Hook（Hook 不生效）；在另外一些机型上可以 Hook，但是不够稳定。比如我们常见的如下方法，Hook 是有问题的：

```java
private static boolean isModleActive() {
    return false;
}
```

Xposed 模块通常的做法是，Hook 这个方法，让它返回 true；就可以判断模块激活了。但是很遗憾，太极内部这么做有点小问题。但是，你可以很容易地修复它。

1. 如果你是 Hook 自己，比如上面判断是否激活的；你只需要在这个方法里面加一行日志即可完美解决；比如，上面的方法改成这样：

```java
private static boolean isModleActive() {
    Log.i("fake", "isModuleActive");
    return false;
}
```

就可以生效了。

2. 如果你需要 Hook 别的 APP 中这样的方法，那没有办法；建议更换 Hook 点。

### 超长的方法

如果方法体太大，那么也会有一些兼容性问题；另外，在某些机器上还会有性能问题。总的来说，如果一个方法超过 2000 行，那么在 太极 中 Hook 此方法可能会出现潜在的问题：无法 Hook 或者 启动卡慢；推荐更换 Hook 点。

### 方法所在的类有 static 块

太极在 Hook static 方法的时候，会提前初始化方法所在的类。如果这个类有 static 块，并且这个 static 块有副作用（如加载数据库，或者别的业务逻辑等）；那么可能导致 APP 内部运行逻辑不正常。因此，在 Hook 带有 static 块的 static 方法的时候，需要特别小心。请注意：如果 static 块中只做变量初始化，创建对象等，这是没有问题的。

### 调用原方法

请一定使用标准 API `XposedBridge.invokeOriginalMethod()` 去调用原方法。如果你手动保存原方法，然后手动调用；可能会出现各种莫名其妙的问题。

## 文件权限/配置/XSharedPreference

太极支持 9.0 系统，但是 Android 9.0 上 SELinux 的策略有一些变化。在以前，只要设置文件的权限为 711，其他 APP 就可以读取本 APP 的文件。但是在 Android 9.0 上，如果 APP 的 target SDK version 为 28 及以上，那么即使你设置文件权限为 777，其他 APP 对你 APP 文件的读取也会被 SELinux 阻止。在 Xposed 模块中，XSharedPreference 特性受此影响。推荐的处理方法有：

1. target SDK version 设置为 27 或者更低。理论上讲，Xposed 模块基本上不需要权限，也没有后台 service；更高的 SDK version 只会带来更多的限制；完全没有那个必要。
2. 如果某个功能依赖配置生效，推荐做成 默认生效；再通过开关关闭，那样的话，即使配置无权访问，用户也能使用正常功能。
3. 通过 ContentProvider 共享配置。

## 如何提升在太极中的体验？

如果你已经注意了上述问题，那么插件基本上在太极中可以使用了。如果更进一步，你还想做更多的，可以继续往下看。

### 为何模块提示未激活？

如果 Xposed 没有被太极重新创建，那么模块所需要的 Xposed 运行环境并不存在；因此会出现未激活。要解决这问题，需要把模块在 太极 中重新创建。**但是不推荐这么做**。模块需要加载，其实本身并不需要 Xposed 环境；只要模块不做出“发现模块没有激活，就完全不给使用的逻辑”，一般情况下是没有任何问题的。

### 如何判断模块是否激活了？

接上条；我们不推荐把 Xposed 模块重新创建。但是如果需要查询用户是否勾选了你这么模块，这样是可以的；直接 copy 如下代码判断即可：

```java
private static boolean isExpModuleActive(Context context) {

    boolean isExp = false;
    if (context == null) {
        throw new IllegalArgumentException("context must not be null!!");
    }

    try {
        ContentResolver contentResolver = context.getContentResolver();
        Uri uri = Uri.parse("content://me.weishu.exposed.CP/");
        Bundle result = null;
        try {
            result = contentResolver.call(uri, "active", null, null);
        } catch (RuntimeException e) {
            // TaiChi is killed, try invoke
            try {
                Intent intent = new Intent("me.weishu.exp.ACTION_ACTIVE");
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                context.startActivity(intent);
            } catch (Throwable e1) {
                return false;
            }
        }
        if (result == null) {
            result = contentResolver.call(uri, "active", null, null);
        }

        if (result == null) {
            return false;
        }
        isExp = result.getBoolean("active", false);
    } catch (Throwable ignored) {
    }
    return isExp;
}
```

### 如何判断 Exp 创建了哪些应用？

在某些情况下，我们需要处理应用列表。比如说，权限管理模块，可能用户只需要对特定的应用进行权限管理。因此，模块中需要列出所有应用，让用户选择。

但是在 EXposed 中，并非所有 APP 都能加载 Xposed 模块。**只有 EXposed 创建过的模块才能使用 Xposed 功能**。因此，需要有办法知道 EXposed 中的 APP 列表。可以用如下方法获取：

```java
    private static List<String> getExpApps(Context context) {
        Bundle result;
        try {
            result = context.getContentResolver().call(Uri.parse("content://me.weishu.exposed.CP/"), "apps", null, null);
        } catch (Throwable e) {
            return Collections.emptyList();
        }

        if (result == null) {
            return Collections.emptyList();
        }
        List<String> list = result.getStringArrayList("apps");
        if (list == null) {
            return Collections.emptyList();
        }
        return list;
    }
```

### 如何引导用户勾选模块？

模块需要勾选才能激活，你可以直接跳转到 太极 内部的模块管理界面，引导用户激活模块，代码如下：

```
Intent t = new Intent("me.weishu.exp.ACTION_MODULE_MANAGE");
t.setData(Uri.parse("package:" + "Your package name"));
t.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
try {
    startActivity(t);
} catch (ActivityNotFoundException e) {
    // TaiChi not installed.
}
```

这段代码会跳转到太极的模块管理界面，太极会定位到此模块，然后高亮此模块，并且提示用户勾选它可以激活模块。

### 如何引导用户添加应用？

在太极中，只有添加到太极内部的应用才能使用 Xposed 模块，你可以引导用户把你需要的 APP 添加到太极中，代码如下：

```java
Intent t = new Intent("me.weishu.exp.ACTION_ADD_APP");
t.setData(Uri.parse("package:" + "package1" + "|" + "package2" + "|" + "package3"));
t.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
try {
    startActivity(t);
} catch (ActivityNotFoundException e) {
    // TaiChi not installed or version below 4.3.4.
}
```

跳转到太极之后，太极会在添加应用的界面勾选上你传递过去的包名，用户只需要点击创建，即可把需要的应用添加到太极。

注意：magisk 版支持同时添加多个 APP，使用 `|` 分割包名即可。普通版**仅支持一次添加一个应用**，如果普通版传递多个，会直接忽略。
