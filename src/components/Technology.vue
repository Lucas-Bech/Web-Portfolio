<template>
    <a :href="technology.link" target="_blank">{{ technology.name }}</a>
</template>

<script>
export default {
    name: "Technology",
    props: ['technology']
}
</script>

<style lang="scss" scoped>
a {
    display: inline-block;
    margin: auto 10px;
    color: white;
    padding: .4em .6em .4em .6em;
    background-color: rgba(10, 10, 200, 1);
    border-radius: 2rem;
}
</style>
