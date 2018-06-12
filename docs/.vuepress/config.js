module.exports = {
    title: '阿强想赢',  // 设置网站标题
    dest: './dist',    // 设置输出目录
    base: '/blog/', // 设置站点根路径
    repo: 'https://github.com/txs1992/mt-blog', // 添加 github 链接
    themeConfig: {
        // 添加导航栏
        nav: [
          { text: '阅读', link: '/vue/' },
          { text: 'css', link: '/css/' },
          {
            text: '常用工具',
            // 这里是下拉列表展现形式。
            items: [
              { text: '百度一下', link: 'https://www.baidu.com/' },
              { text: '百度翻译', link: 'http://fanyi.baidu.com/' },
              { text: '微软搜索', link: 'https://cn.bing.com/' }
            ]
          }
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/vue/': [
              'one',
              'two'
            ],
            '/css/': [
              'three',
              'four'
            ]
          }
      }
}
