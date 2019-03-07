<template>
    <v-layout justify-space-around wrap id="portfolio-layout">
        <portfolio-project 
        v-for="(project, index) in projects" 
        :key="index" 
        :project="project" 
        :class="{ 'animated fadeInLeft': index % 2 === 0, 
                  'animated fadeInRight': index % 2 !== 0 }">
        </portfolio-project>
    </v-layout>
</template>

<script>
// Components
import PortfolioProject from '../components/PortfolioProject.vue'

// Data
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

