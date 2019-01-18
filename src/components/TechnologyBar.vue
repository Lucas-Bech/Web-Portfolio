<template>
    <div id="technologybar">
        <Technology v-for="technology in technologies" :key="technology.name" :technology="technology" />
    </div>
</template>

<script>
import Technology from './Technology.vue'
export default {
    name: "TechnologyBar",
    props: ['technologies'],
    components: {
        Technology
    }
}
</script>

<style lang="scss" scoped>
#technologybar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10px, 120px));
    grid-column-gap: 10px;
    justify-content: center;
    background-color: $darkViolet;
}
</style>

