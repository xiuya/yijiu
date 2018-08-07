import Vue from 'vue'
import Router from 'vue-router'


/* home */
const home = () =>
    import('@/pages/home');

/* 首页 */
const homeindex = () =>
    import('@/pages/home/home');
const homeDetail=()=>
    import('@/pages/home/homeDetail')
const homeSearch=()=>
    import('@/pages/home/search');
/* 订单  */
const order = () =>
    import('@/pages/order/order');

/* 购物车*/
const cart = () =>
    import('@/pages/cart/cart');


/* 我的 */
const my = () =>
    import('@/pages/my/my');
const mycon1 = () =>
    import('@/pages/my/my-con1');
const mycon2 = () =>
    import('@/pages/my/my-con2');
const mycon3 = () =>
    import('@/pages/my/my-con3');
const mycon4 = () =>
    import('@/pages/my/my-con4');
const mycon5 = () =>
    import('@/pages/my/my-con5'); 
const login = () =>
    import('@/pages/my/login');

const setUp = () =>
    import('@/pages/my/setUp'); //设置密码
const editPwd = () =>
    import('@/pages/my/editPwd'); //修改密码
const setPwd = () =>
    import('@/pages/my/setPwd');


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: home,
        children: [{
            path: '',
            redirect: { name: 'home' }
        },
        {
            path: 'home',
            name: 'home',
            component: homeindex,
            meta: {
                auth: false,
            }
        },
        {
            path: 'order',
            name: 'order',
            component: order,
            meta: {
                auth: false,
            }
        },
        {
            path: 'cart',
            name: 'cart',
            component: cart,
            meta: {
                auth: false,

            }
        },
        {
            path: 'my',
            name: 'my',
            component: my,
            meta: {
                auth: false,
            },
            children:[
			    {
			        path: 'mycon1',
			        name: 'mycon1',
			        component:mycon1,
			        meta: {
			            auth: true,
			        }
			    },
			    {
			        path: 'mycon2',
			        name: 'mycon2',
			        component:mycon2,
			        meta: {
			            auth: true,
			        }
			    },{
			        path: 'mycon3',
			        name: 'mycon3',
			        component:mycon3,
			        meta: {
			            auth: true,
			        }
			    },
			    {
			        path: 'mycon4',
			        name: 'mycon4',
			        component:mycon4,
			        meta: {
			            auth: true,
			        }
			    },
			    {
			        path: 'mycon5',
			        name: 'mycon5',
			        component:mycon5,
			        meta: {
			            auth: true,
			        }
			    }
			]
        }
        ]
    },
    {
        path: '/login',
        name: login,
        component: login
    },{
        path: '/home/homeDetail',
        name: 'homeDetail',
        component:homeDetail
    },{
        path: '/home/homeSearch',
        name: 'Search',
        component:homeSearch
    },
   
    {
        path: '/my/setUp/editPwd',
        name: 'editPwd',
        component: editPwd,
        meta: {
            auth: true,
        }
    },
    {
        path: '/my/setUp/setPwd',
        name: 'setPwd',
        component: setPwd,
        meta: {
            auth: true,
        }
    },
   
  
  
   
    ]
})