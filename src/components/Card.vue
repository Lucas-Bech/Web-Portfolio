<template>
    <div class="card">
        <div id="title-bg">
            <h3>{{ project.title }}</h3>
        </div>
        <div id="description-bg">
            <p>{{ project.description }}</p>
        </div>
        <TechnologyBar :technologies="project.technologies" />
        <ImageLinkBar :imageLinks="project.imageLinks" />
    </div>
</template>

<script>
import TechnologyBar from './TechnologyBar.vue'
import ImageLinkBar from './ImageLinkBar.vue'
export default {
    name: 'Card',
    props: ['project'],
    components: {
        TechnologyBar,
        ImageLinkBar
    }
}
</script>

<style lang="scss" scoped>
    .card {
        display: grid;
        grid-template-areas: 
        "title        description"
        "technologies links";
        grid-template-rows: 1fr .2fr;
        grid-template-columns: repeat(2, 1fr);
        background: url('../assets/bg_prism.png');
        border: 2px solid black;
        width: 100%;
        height: 100%;
        
    }
    #title-bg {
        background-color: $lightViolet;
        width: 100%;
        height: 100%;
    }
    #description-bg {
        background-color: #1A2930;
        width: 100%;
        height: 100%;
        text-align: center;
    }
    h3 {
        grid-area: title;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        text-justify: center;
        text-align: center;
        font-size: 3rem;
        color: white;
    }
    p {
        grid-area: description;
        display: table-cell;
        vertical-align: middle;
        margin: 0 auto;
        color: white;
        font-size: 1.2rem;
        padding: 10px;
    }
</style>
