import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            name: 'Home',
            component: Home
        },
        {
            path: '/Projects',
            name: "Projects",
            component: Projects
        },
        {
            path: '/About',
            name: 'About',
            component: About
        }
    ]
})