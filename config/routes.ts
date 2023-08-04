export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/admin/react',
        name: 'demo',
        icon: 'smile',
        component: './Demo/DemoReact/index',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/applet-design',
    name: 'appletDesign',
    icon: 'antDesign',
    component: './AppletDesign',
    footerRender: false // 当前路由不展示页脚
  },
  // {
  //   path: '/demo',
  //   name: '案例',
  //   icon: 'book',
  //   routes: [
  //     {
  //       path: '/demo/react',
  //       name: 'react例子',
  //       icon: 'profile',
  //       component: DemoReact,
  //     },
  //     // {
  //     //   component: './404',
  //     // },
  //   ],
  // },
  {
    component: './404',
  },
];
