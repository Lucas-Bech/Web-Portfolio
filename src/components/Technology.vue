<template>
    <a :href="technology.link" rel="nofollow" target="_blank">{{ technology.name }}</a>
</template>

<script>
export default {
    name: "Technology",
    props: ['technology']
}
</script>

<style lang="scss" scoped>


</style>
