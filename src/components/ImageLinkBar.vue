<template>
    <ul>
        <ImageLink v-for="imageLink in imageLinks" :key="imageLink.link" :imageLink="imageLink"/>
    </ul>
</template>

<script>
import ImageLink from './ImageLink.vue'
export default {
    name: "ImageLinkBar",
    props: ['imageLinks'],
    components: {
        ImageLink
    }
}
</script>

<style lang="scss" scoped>
ul {
    grid-area: links;
    background-color: $brownGrey;
    height: 100%;
    padding: 0;
    margin: 0;
}
</style>
