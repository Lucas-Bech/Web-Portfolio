<template>
    <div id="projects">
        <Card :data="obj" />
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
            obj: {
                title: "test",
                description: "desc",
                image: "../assets/dog.jpg"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
div {
    margin: 0 5vw 0 5vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20vw, auto));
    grid-template-rows: repeat(auto-fit, minmax(auto, 50vh));
    grid-gap: 10vh;
}
h1 {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>