# Quick Start

TaiChi has two operating mode: magisk mode and non-root mode. If you don't want to unlock the bootloader/flash system images, you can use the non-root mode, but if you prefer more powerful functions, you will need to go for the magisk mode.

::: tip
**What is the different with magisk mode and non-root mode?**

The only difference is that magisk mode can hook system process (see below), so more modules are supported, such as Xposed Edge/Greenify. But magisk mode needs an unlocked bootloader and an active Magisk installation, while non-root mode users just need to install TaiChi.
:::

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

If you want to use magisk mode, please read the [guide](/taichi-magisk) carefully.
