<template>
    <div id="portfolio">
        <Card v-for="(project, index) in projects" :key="index" :project="project" 
        :class="{ 'animated fadeInLeft': index % 2 === 0, 
                  'animated fadeInRight': index % 2 !== 0 }"/>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import portfolioData from '../data/portfolio.json'
export default {
    name: 'Portfolio',
    components: {
        Card
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
    //margin: 0 5vw 0 5vw;
    display: grid;
    grid-gap: 8vh;
}
@media (min-width: 700px) {
    #portfolio {
        grid-template-columns: 1fr 1fr;
    }
}
</style>