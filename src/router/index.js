import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import SearchResult from '../pages/SearchResult.vue'
import UserProfile from '../pages/UserProfile.vue'
import ComingSoon from '../pages/ComingSoon.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name: 'Home',
            component: Home
        },
        {
            path:'/search-result',
            name: 'SearchResult',
            component: SearchResult
        },
        {
            path:'/user-profile',
            name: 'UserProfile',
            component: UserProfile
        },
        {
            path: '/coming-soon',
            name: 'ComingSoon',
            component: ComingSoon
        }
        

    ]
})