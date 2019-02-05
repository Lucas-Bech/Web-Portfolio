import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/PageHome.vue'
import Portfolio from './views/PagePortfolio.vue'
import About from './views/PageAbout.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            name: 'Home',
            component: Home
        },
        {
            path: '/Portfolio',
            name: "Portfolio",
            component: Portfolio
        },
        {
            path: '/About',
            name: 'About',
            component: About
        }
    ]
})