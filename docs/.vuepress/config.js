module.exports = {
    title: '阿强想赢',  // 设置网站标题
    dest: './dist',    // 设置输出目录
    base: '/blog/', // 设置站点根路径
    repo: 'https://github.com/txs1992/mt-blog', // 添加 github 链接
    sidebarDepth:1,//侧边栏自动显示当前激活页面中标题的链接,侧边栏自动显示当前激活页面中标题的链接，默认深度是 1
    themeConfig: {
        // 添加导航栏
        nav: [
          { text: '坚持阅读',
            items:[
              {text:'推荐阅读', link:'/read/'},
              {text:'经典语录', link:'/words/'},
              {text:'名人传记', link:'/nbMan/'},
            ]
          },
          { text: '前端很嗨',
            items:[
              {text:'写字板✍️', link:'/webBook/'},
              {text:'代码库😳', link:'/codes/'},
              {text:'技术文章🏫', link:'/article/'},
            ]
          },
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
            '/read/': [
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12'
            ],
            '/webBook/': [
              '1',
              '2',
              '3',
              '4'
            ],
            '/words/':[
              '1',
              'two'
            ],
            '/codes/':[
              '1'
            ],
            '/article/':[
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10'
            ],
            '/nbMan/':[
              '1'
            ]
          }
      }
}
