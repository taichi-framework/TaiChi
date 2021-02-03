# TaiChi

## Introduction 

TaiChi is a framework to use Xposed module with or **without** Root/Unlock bootloader, it currently supports Android 5.0 ~ **10.0**.

In simple words, TaiChi is a **Xposed-Styled** Framework, it can load Xposed modules, do hooks and so on.

## Features

TaiChi is Xposed-Styled, but it has no relation with Xposed. The only relevance is that TaiChi can load Xposed modules, the implementation of TaiChi and Xposed Framework is very different.

Here are some features of Taichi:

1. TaiChi **fully supports Android Pie**.
2. TaiChi can run in a **non-root environment**.
3. TaiChi does not affect the android system and it does not hook all apps in system. Only the apps that you want to apply Xposed modules are hooked. Other apps in your system will run in a completely intact environment, which means TaiChi can **pass SafetyNet easily**.
4. TaiChi **doesn't need to reboot** system in most cases.
5. TaiChi is **hard to be detected**. TaiChi doesn't modify the libart and app_process, thus it has nearly no noticeable characteristics.

## Usage

TaiChi has two operating mode: magisk mode and non-root mode. If you don't want to unlock the bootloader/flash system images, you can use the non-root mode, but if you prefer more powerful functions, you will need to go for the magisk mode.

### What is the different with magisk mode and non-root mode?

The only difference is that magisk mode can hook system process (see below), so more modules are supported, such as Xposed Edge/Greenify. But magisk mode needs an unlocked bootloader and an active Magisk installation, while non-root mode users just need to install TaiChi.

### Non-Root mode

TaiChi runs in non-root mode in genernal, just install TaiChi, and you are good to go. If you want to use Xposed modules, for example, you'd like to use SnapFreedom on SnapChat, follow these steps:

1. Click the float button in main page of TaiChi, and click the button : **Create App**.
2. Select the app you'd like to apply Xposed module, such as SnapChat.
3. Click the "Create" button at the bottom and wait patiently for the process to finish.
4. After the creation process is finished, TaiChi will tell you that you will need to uninstall the original SnapChat. Please uninstall it, as this is necessary due to TaiChi in non-root mode needs to modify the target APK file which means we have to re-sign the APK. 
5. Follow the steps as instructed in TaiChi app until you installed the re-signed version of the app. 
6. Enter the **Module Manage** section by clicking the button "Module Manager" in the float button of Home page.
7. Check the SnapFreedom module.
8. Kill the process of SnapChat, and the Xposed module applied should work properly now.(A system reboot is not necessary)

### Magisk mode

Non-root mode of TaiChi has some shortcommings even though it does not need a unlocked bootloader. We've developed a magisk module to overcome the problems. This module can give TaiChi in magisk mode extra power to perform operations such as :-

1. TaiChi has the ability to hook into system process.
2. No apk modification is needed, thus retaininng the original signature of apk. 

After you flashed the [magisk module](https://github.com/taichi-framework/TaiChi-Magisk) provided by TaiChi, TaiChi will switch to magisk mode automaticly: TaiChi App + magisk module = TaiChi·Magisk. When the TaiChi magisk module is disabled or removed, TaiChi app will switch back to non-root mode.

If you want to use magisk mode, please read the [wiki](https://github.com/taichi-framework/TaiChi/wiki/taichi-magisk-beta) carefully.

## For Developers 

TaiChi is a framework, and developers are welcomed to write xposed modules with hooks based on TaiChi Framework. Module written based on TaiChi framework is fully compatible with Xposed Framework, so contrary a Xposed Framework-based module will work well with the TaiChi framework too. 

But before that, we need to clarify that there's still some differences between TaiChi Framework and Xposed Framework, please refer [For Xposed Developers](https://github.com/taichi-framework/TaiChi/wiki/For-Xposed-developer) for further details. 

## Discussion

- [Telegram Group](https://t.me/vxp_group)
- QQ Group: 729163976

## Contact me

[email](mailto:twsxtd@gmail.com)
