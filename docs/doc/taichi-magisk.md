## What is TaiChi·Magisk？

**TaiChi·Magisk is the enhanced version of TaiChi**。

The normal TaiChi can not hook into system process, and it must uninstall the original app when create new app.TaiChi·Magisk can overcome these shortcomings. TaiChi·Magisk hooks into system process via a magisk module, it can intercept all processes in system, so it can do all which Xposed Framework can do.

To be specific, what are the differences between TaiChi·Magisk and TaiChi?

1. TaiChi·Magisk can hook system process, so more modules are supported, such as Xposed Edge/Greenify.
2. TaiChi·Magisk don't need to modify app, it is very fast to create apps.
3. TaiChi·Magisk has more control over system, so it is more stable than the normal version.

And what are the differences between TaiChi·Magisk and Xposed Framework?

1. TaiChi·Magisk fully supports Android Pie.
2. TaiChi·Magisk does not effect the android system and it does not hook all apps in system. Only the apps you want to apply Xposed modules are hooked. Other apps in system run in a completely clean environment.
3. TaiChi·Magisk doesn't need to reboot sysytem in most cases.
4. TaiChi·Magisk is hard to detect. TaiChi doesn't modify the libart and app_process, it has nearly no noticeable characteristics.

## How to use ?

In simple terms, follow the steps:

1. Install Magisk. Please follow [Magisk's guide](https://topjohnwu.github.io/Magisk/install.html)
2. Flash the magisk module provided by TaiChi. You can find it in [release page](https://github.com/tiann/Tai-Chi/releases) or download it from Magisk Manager.
3. Install Tai Chi App. 
4. Open Tai Chi and you will see the TaiChi·Magisk activated.

If you want to use Xposed modules, for example, you'd like to use SnapFreedom on SnapChat, follow these steps:

1. Click the float button in main page of TaiChi, and click the button : **Add App**.
2. Select the app you'd like to apply Xposed module, such as SnapChat.
3. Click the "Add" button at the bottom.
4. Enter the **Module Manage** section by clicking the button "Module Manager" in the float button of Home page.
5. Check the SnapFreedom module.
6. Kill the process of SnapChat, and the Xposed module applied should work properly now.(A system reboot is not necessary)

!> The module will take effect only if you **Add it to Tai Chi**. If the module doesn't work, please check this.

!> System reboot is not necessary in genernal, just kill target process and the module will take effect. If "Target process" is system process(such as system_server, systemui), then it means a system reboot.