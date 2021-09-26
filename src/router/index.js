import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import SearchResult from '../pages/SearchResult.vue'
import UserProfile from '../pages/UserProfile.vue'
import ComingSoon from '../pages/ComingSoon.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/Signup.vue'
import Dashboard from '../components/Dashboard.vue'
import BlogPage from '../pages/BlogPage.vue'
// import firebase from 'firebase'

Vue.use(Router)


const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/search-result',
            name: 'SearchResult',
            component: SearchResult
        },
        {
            path: '/user-profile',
            name: 'UserProfile',
            component: UserProfile
        },
        {
            path: '/coming-soon',
            name: 'ComingSoon',
            component: ComingSoon
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },

        {
            path: '/blogs',
            name: 'Blog-Page',
            component: BlogPage
        }


    ]
})

// router.beforeEach((to, from, next) => {
//     const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//     const isAuthenticated = firebase.auth().currentUser();
//     if (requiresAuth && !isAuthenticated) {
//         next("/login");
//     }
//     else {
//         next();
//     }
// })
export default router;