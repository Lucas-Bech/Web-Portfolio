import Vue from 'vue'
import Router from 'vue-router'
import Resume from './views/Resume.vue'
import Portfolio from './views/Portfolio.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            name: 'Resume',
            component: Resume
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