<template>
    <div id="projects">
        <Card v-for="project in projects" :key="project.title" :project="project"/>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
import projectsData from '../data/projects.json'
export default {
    name: 'Projects',
    components: {
        Card
    },
    data() {
        return {
            projects: projectsData.projects
        }
    }
}
</script>

<style lang="scss" scoped>
#projects {
    margin: 0 5vw 0 5vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 40vw));
    grid-template-rows: repeat(auto-fit, minmax(auto, 50vh));
    grid-gap: 10vh;
}
h1 {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>