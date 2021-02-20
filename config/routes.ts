const routes = [{
  path: '/',
  name: '文章管理',
  icon: 'dashboard',
  routes: [
    {
      name: '博客列表',
      path: '/list',
      routes: [{
        path: '/list/js',
        name: 'JS',
        component: '@/pages/BlogList/index',

        // routes: [{
        //   name: 'jscontent1',
        //   path: '/js/jscontent1',
        //   component: '@/pages/AddBlogs/index',
        // }]
      }, {
        path: '/list/es6',
        name: 'ES6',
        component: '@/pages/BlogList/index',
      }, {
        path: '/list/css',
        name: 'CSS',
        component: '@/pages/BlogList/index',

      }, {
        path: '/list/vue',
        name: 'VUE',
        component: '@/pages/BlogList/index',

      }, {
        path: '/list/react',
        name: 'REACT',
        component: '@/pages/BlogList/index',
      }, {
        path: '/list/webpack',
        name: 'Webpack',
        component: '@/pages/BlogList/index',
      }]
    }, {
      name: '博客编辑板块',
      // component: '@/pages/AddBlogs/index',
      path: '/add',
      routes: [{
        path: '/add/test',
        name: '添加文章',
        component: '@/pages/AddBlogs/index',
        // routes: [{
        //   name: 'analysis2',
        //   path: '/html/htmlcontent',
        //   component: '@/pages/frontend/index',
        // }]
      }]
    }, {
      // name: '页面添加',
      // component: '@/pages/basic-form/index',
      // path: '/add'
      // routes: [{
      //   path: '/css',
      //   name: 'csscontent',
      //   routes: [{
      //     name: 'analysis3',
      //     path: '/css/csscontent',
      //     component: '@/pages/frontend/index',
      //   }]
      // }]
    }]
}];

export default routes;

// {
//         path: '/html', 
//         component: '@/components/userLogo',
//         name: 'html及浏览器基础知识'
//     },{
//         path: '/css', 
//         component: '@/components/userLogo',
//         name: 'css及less和sass'
//     },{
//         path: '/vue', 
//         component: '@/components/userLogo',
//         name: 'vue'
//     },{
//         path: '/react', 
//         component: '@/components/userLogo',
//         name: 'react'
//     },{
//         path: '/angular', 
//         component: '@/components/userLogo',
//         name: 'angular'
//     }