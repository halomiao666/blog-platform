const routes = [{
  path: '/',
  name: '文章管理',
  icon: 'dashboard',
  routes: [{
    name: '博客编辑板块',
    // component: '@/pages/EditBlogs/index',
    path: '/blogdetail',
    routes: [{
      path: '/blogdetail/edit',
      name: '添加文章',
      component: '@/pages/EditBlogs/index',
      // routes: [{
      //   name: 'analysis2',
      //   path: '/html/htmlcontent',
      //   component: '@/pages/frontend/index',
      // }]
    }]
  }, {
    name: '前端',
    path: '/frontend/list',
    routes: [{
      path: '/frontend/list/js',
      name: 'JS',
      component: '@/pages/BlogList/index',

      // routes: [{
      //   name: 'jscontent1',
      //   path: '/js/jscontent1',
      //   component: '@/pages/AddBlogs/index',
      // }]
    }, {
      path: '/frontend/list/es6',
      name: 'ES6',
      component: '@/pages/BlogList/index',
    }, {
      path: '/frontend/list/css',
      name: 'CSS',
      component: '@/pages/BlogList/index',

    }, {
      path: '/frontend/list/vue',
      name: 'VUE',
      component: '@/pages/BlogList/index',

    }, {
      path: '/frontend/list/react',
      name: 'REACT',
      component: '@/pages/BlogList/index',
    }, {
      path: '/frontend/list/webpack',
      name: 'Webpack',
      component: '@/pages/BlogList/index',
    }]
  }, {
    name: '后端',
    path: '/backend/list',
    routes: [{
      path: '/backend/list/express',
      name: 'EXPRESS',
      component: '@/pages/BlogList/index',
      // routes: [{
      //   name: 'jscontent1',
      //   path: '/js/jscontent1',
      //   component: '@/pages/AddBlogs/index',
      // }]
    }, {
      path: '/backend/list/mongo',
      name: 'MONGO',
      component: '@/pages/BlogList/index',
    },]
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
