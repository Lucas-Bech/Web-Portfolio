<template>
    <div id="portfolio">
        <PortfolioProject v-for="(project, index) in projects" :key="index" :project="project" 
        :class="{ 'animated fadeInLeft': index % 2 === 0, 
                  'animated fadeInRight': index % 2 !== 0 }">
        </PortfolioProject>
    </div>
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

<style lang="scss" scoped>
#portfolio {
    display: grid;
    grid-gap: 4vh;
}
@media (min-width: 700px) {
    #portfolio {
        grid-template-columns: 1fr 1fr;
    }
}
</style>