import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'
import CodeSignal from './components/CodeSignal.vue'
import DogFetcher from './components/DogFetcher.vue'

Vue.use(Router)

export default new Router({
    routes: [
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