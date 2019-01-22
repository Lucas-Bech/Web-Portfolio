<template>
        <a :href="imageLink.link">
            <img :src="imageSrc" alt="Source code" :title="imageLink.title">
        </a>
</template>

<script>
export default {
    name: "ImageLink",
    props: ["imageLink"],
    computed: {
        imageSrc: function () {
            return require('../assets/' + this.imageLink.image)
        }
    }
}
</script>

<style lang="scss" scoped>
li {
    height: 100%;
    width: 100%;
}
img {
    height: 35px;
    width: auto;
}
</style>
