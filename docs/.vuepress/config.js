module.exports = {
  title: "Tai Chi",
  description: "A Rootless Xposed styled Framework",
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en", // 将会被设置为 <html> 的 lang 属性
      title: "Tai Chi",
      description: "A Rootless Xposed styled Framework",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "太极",
      description: "一个可以免 Root 模式运行的类 Xposed 框架",
    },
  },
  themeConfig: {
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        serviceWorker: {
          updatePopup: {
            buttonText: "Refresh",
          },
        },
        sidebar: [
          ["/doc/", "Introduction"],
          ["/doc/getting_started", "Getting Start"],
          ["/doc/taichi-magisk", "TaiChi·Magisk"],
          // ["/doc/wuji", "About Wuji"],
          // ["/doc/for-xposed-dev", "For Developer"],
          ["/doc/contact", "Contact"],
          ["/doc/sponsor", "Sponsor"],
          ["/doc/faq", "FAQ"],
        ],
        nav: [
          { text: "Guide", link: "/doc/getting_started/" },
          { text: "Modules", link: "/module/" },
          { text: 'Commit Module', link: 'http://admin.taichi.cool' },
        ],
        lastUpdated: "Last Updated",
        docsRepo: "taichi-framework/TaiChi",
        docsDir: "docs",
        editLinks: true,
      },
      "/zh/": {
        selectText: "语言",
        label: "简体中文",
        editLinkText: "帮我们改进此页面",
        docsRepo: "taichi-framework/TaiChi",
        docsDir: "docs",
        serviceWorker: {
          updatePopup: {
            message: "文档有更新",
            buttonText: "刷新",
          },
        },
        lastUpdated: "最后更新",
        sidebar: [
          ["/zh/doc/", "简介"],
          ["/zh/doc/getting_started", "开始使用"],
          ["/zh/doc/taichi-magisk", "太极·阳"],
          ["/zh/doc/wuji", "无极模式"],
          ["/zh/doc/how-to-debug", "开发指南"],
          ["/zh/doc/for-xposed-dev", "适配指南"],
          ["/zh/doc/contact", "联系我"],
          ["/zh/doc/sponsor", "赞助支持"],
          ["/zh/doc/faq", "常见问题"],
        ],
        nav: [
          { text: "教程", link: "/zh/doc/getting_started/" },
          { text: "模块下载", link: "/zh/module/" },
          { text: '提交模块', link: 'http://admin.taichi.cool' },
        ],
      },
    },
  },
};
