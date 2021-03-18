import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Client/Home.vue'
import Login from '../components/Client/Login.vue'
import About from '../components/Client/About.vue'
import Menu from '../components/Client/Menu.vue'
import Contact from '../components/Client/Contact.vue'
import Services from '../components/Client/Services.vue'
import Blog from '../components/Client/Blog.vue'
import ChildrenBlog from '../components/Client/ChildrenBlog.vue'
import Admin from '../components/Admin/Admin.vue'
import Acount from '../components/Admin/Acount.vue'
import Product from '../components/Admin/Product.vue'
import Category from '../components/Admin/Category.vue'
Vue.use(VueRouter)


const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            header: true,
            footer: true,
            sidebar1: false,
            sidebar2: false
          }
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
            if (to.name != 'Login' && to.name == 'Login' && localStorage.getItem("token")) next({ name: 'Admin' })
            next()
        },
    },
    {
        path: '/About',
        name: 'About',
        component: About,
        meta: {
            header: true,
            footer: true,
            sidebar1: false,
            sidebar2: false
          }
    },
    {
        path: '/Menu',
        name: 'Menu',
        component: Menu,
        meta: {
            header: true,
            footer: true,
            sidebar1: false,
            sidebar2: false
          }
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact,
        meta: {
            header: true,
            footer: true,
            sidebar1: false,
            sidebar2: false
          }
    },
    {
        path: '/Services',
        name: 'Services',
        component: Services,
        meta: {
            header: true,
            footer: true,
            sidebar1: false,
            sidebar2: false
          }
    },
    {
        path: '/Blog',
        name: 'Blog',
        component: Blog,
        meta: {
            header: true,
            footer: true,
            sidebar1: false,
            sidebar2: false
          }
    },
    {
        path: '/ChildrenBlog',
        name: 'ChildrenBlog',
        component: ChildrenBlog,
        meta: {
            header: true,
            footer: true,
            sidebar1: false,
            sidebar2: false
          }
    },
    {
        path: '/Admin',
        name: 'Admin',
        component: Admin,
        beforeEnter: ((to, from, next) => {
            if (!localStorage.getItem("token")) next({ name: 'Login' })
            next()
            }),
        meta: {
            header: false,
            footer: false,
            sidebar1: true,
            sidebar2: true
          }
    },
    {
        path: '/Acount',
        name: 'Acount',
        component: Acount,
        meta: {
            header: false,
            footer: false,
            sidebar1: true,
            sidebar2: true
          }
    },
    {
        path: '/Product',
        name: 'Product',
        component: Product,
        meta: {
            header: false,
            footer: false,
            sidebar1: true,
            sidebar2: true
          }
    },
    {
        path: '/Category',
        name: 'Category',
        component: Category,
        meta: {
            header: false,
            footer: false,
            sidebar1: true,
            sidebar2: true
          }
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name == 'Login' && localStorage.getItem("token")) next({ name: 'Admin' })
    next()
})

export default router