const routes = [{
    path: '/', 
    name: '文章管理',
    icon: 'dashboard',
    routes: [{
      name: '博客列表',
      component: '@/pages/BlogList/index',
      path: '/list'
      // routes: [{
      //   path: '/js',
      //   name: 'jscontent',
      //   icon: 'dashboard',
      //   routes: [{
      //     name: 'jscontent1',
      //     path: '/js/jscontent1',
      //     component: '@/pages/frontend/index',
      //   }]
      // }]
    },{
      name: '博客编辑板块',
      component: '@/pages/AddBlogs/index',
      path: '/add'
      // routes: [{
      //   path: '/html',
      //   name: 'htmlcontent',
      //   routes: [{
      //     name: 'analysis2',
      //     path: '/html/htmlcontent',
      //     component: '@/pages/frontend/index',
      //   }]
      // }]
    },{
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