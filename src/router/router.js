import Vue from 'vue'
import Router from 'vue-router'

// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Home from "@/components/home/Home";
import Jotter from "@/components/jotter/Jotter";
import NavMenu from "@/components/home/NavMenu";
import LibraryIndex from "@/components/library/LibraryIndex";
import Register from "@/components/Register";

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        // {
        //     path: '/',
        //     name: 'index',
        //     redirect: '/index',
        //     component: AppIndex,
        //     meta: {
        //         requireAuth: true
        //     }
        // },
        { path: '/', redirect: '/login' },
        { path: '/login', name: 'Login', component: Login },
        { path: '/register', name: 'Login', component: Register },

        { path: '/home', name: 'Login', component: Home,redirect: '/index',children:[
                { path: '/index', name: 'AppIndex', component: AppIndex ,meta:{requireAuth:true}},
                { path: '/jotter', name: 'AppIndex', component: Jotter ,meta:{requireAuth:true}},
                { path: '/library', name: 'AppIndex', component: LibraryIndex ,meta:{requireAuth:true}},
            ] },
        { path: '/navMenu', name: 'Login', component: NavMenu },


        { path: '/index', name: 'AppIndex', component: AppIndex ,meta:{
            requireAuth:true
            }}
    ]
})