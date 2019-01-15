<template>
    <div id="projects">
        <Card v-for="project in projects" :key="project" :title="project.title"/>
    </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
    name: 'Projects',
    components: {
        Card
    },
    data() {
        return {
            projects: [
                {
                title: "test"
                //description: "desc",
                //image: "../assets/dog.jpg"
            }
            ]
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