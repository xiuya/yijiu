import Vue from 'vue'
import Router from 'vue-router'


/* home */
const home = () =>
    import('@/pages/home');

/* 首页 */
const homeindex = () =>
    import('@/pages/home/home');
// 卖家首页   
const homeSeller = () =>
    import('@/pages/home/home');
const homeDetail=()=>
    import('@/pages/home/homeDetail')
const homeSearch=()=>
    import('@/pages/home/search');
/* 订单  */
const order = () =>
    import('@/pages/order/order');
const orderSeller = () =>
    import('@/pages/order/orderSeller');
const orderDetailnoId = () =>
    import('@/pages/order/orderDetailnoId');
const orderDetail = () =>
    import('@/pages/order/orderDetail');
//   商品管理
const goods = () =>
    import('@/pages/goods/goods');
const goodsDetail = () =>
    import('@/pages/goods/goodsdetail');  
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

    const scrollBehavior = (to, from, savedPosition) => {
        if (savedPosition) {
            // savedPosition is only available for popstate navigations.
            return savedPosition
        } else {
            const position = {}
                // new navigation.
                // scroll to anchor by returning the selector
            if (to.hash) {
                position.selector = to.hash
            }
            // check if any matched route config has meta that requires scrolling to top
            if (to.matched.some(m => m.meta.scrollToTop)) {
                // cords will be used if no selector is provided,
                // or if the selector didn't match any element.
                position.x = 0
                position.y = 0
            }
            // if the returned position is falsy or an empty object,
            // will retain current scroll position.
            return position
        }
    }; 
Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: __dirname,
    scrollBehavior,
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
            path: 'homeSeller',
            name: 'homeSeller',
            component: homeSeller,
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
            },
            children:[]
        },  {
            path: 'orderSeller',
            name: 'orderSeller',
            component: orderSeller,
            meta: {
                auth: false,
            },
            children:[]
        },
        {
            path: 'goods',
            name: 'goods',
            component: goods,
            meta: {
                auth: false,
            },
            children:[]
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
        },{
            path: 'mySeller',
            name: 'mySeller',
            component:resolve => require(['@/pages/my/mySeller'],resolve),
            meta: {
                auth: true,
            }
        },
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
        path: '/order/orderDetail',
        name: 'orderDetail',
        component:orderDetail,
        meta: {
            auth: true,
        }
    },
    {
        path: '/order/orderDetailnoId',
        name: 'orderDetailnoId',
        component:resolve => require(['@/pages/order/orderDetailnoId'],resolve),
        meta: {
            auth: true,
        }
    }, {
        path: '/shop/shopDetail',
        name: 'shopDetail',
        component:resolve => require(['@/pages/home/shopDetail'],resolve),
        meta: {
            auth: true,
        }
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