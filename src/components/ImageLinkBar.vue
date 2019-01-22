<template>
    <div id="image-link-bar">
        <ImageLink v-for="imageLink in imageLinks" :key="imageLink.link" :imageLink="imageLink"/>
    </div>
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
#image-link-bar {
    grid-area: links;
    background-color: $brownGrey;
    height: 100%;
    padding: 0;
    margin: 0;
}
</style>
