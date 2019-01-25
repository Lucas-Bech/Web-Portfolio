<template>
    <div id="portfolio" class="animated fadeInUp faster">
        <Card v-for="project in projects" :key="project.title" :project="project"/>
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
    margin: 0 5vw 0 5vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 40vw));
    grid-template-rows: repeat(auto-fit, minmax(auto, 50vh));
    grid-gap: 10vh;
}

</style>