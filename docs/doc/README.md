# Introduction 

TaiChi is a framework to use Xposed module with or **without** Root/Unlock bootloader, it currently supports Android 5.0 ~ **10.0**.

In simple words, TaiChi is a **Xposed-Styled** Framework, it can load Xposed modules, do hooks and so on.

## Features

TaiChi is Xposed-Styled, but it has no relation with Xposed. The only relevance is that TaiChi can load Xposed modules, the implementation of TaiChi and Xposed Framework is very different.

Here are some features of Taichi:

1. TaiChi **fully supports Android Pie & 10**.
2. TaiChi can run in a **non-root environment**.
3. TaiChi does not affect the android system and it does not hook all apps in system. Only the apps that you want to apply Xposed modules are hooked. Other apps in your system will run in a completely intact environment, which means TaiCi can **pass SafetyNet easily**.
4. TaiChi **doesn't need to reboot** system in most cases.
5. TaiChi is **hard to be detected**. TaiChi doesn't modify the libart and app_process, thus it has nearly no noticeable characteristics.