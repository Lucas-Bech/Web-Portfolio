<template>
<v-layout justify-space-around wrap align-center>
    <PortfolioProject v-for="(project, index) in projects" :key="index" :project="project" 
    :class="{ 'animated fadeInLeft': index % 2 === 0, 
              'animated fadeInRight': index % 2 !== 0 }">
    </PortfolioProject>
</v-layout>
</template>

<script>
import PortfolioProject from '../components/PortfolioProject.vue'
import portfolioData from '../data/portfolio.json'
export default {
    name: 'PagePortfolio',
    components: {
        PortfolioProject
    },
    data() {
        return {
            projects: portfolioData.projects
        }
    }
}
</script>