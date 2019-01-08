import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import DogFetcher from './components/DogFetcher.vue'
import Skills from './components/Skills.vue'
import CodeSignal from './components/CodeSignal.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '*',
            name: 'home',
            component: Home
        },
        {
            path: './Home',
            name: 'home',
            component: Home
        },
        {
            path: '/Skills',
            name: 'skills',
            component: Skills
        },
        {
            path: '/CodeSignal',
            name: 'codeSignal',
            component: CodeSignal
        },
        {
            path: '/DogFetcher',
            name: 'dogfetcher',
            component: DogFetcher
        }
    ]
})