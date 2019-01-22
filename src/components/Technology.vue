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
a {
    animation: pulse 1s infinite;
    display: inline-block;
    margin: auto 10px;
    color: white;
    padding: .4em .6em .4em .6em;
    background-color: rgba(10, 10, 200, 1);
    border-radius: 2rem;
    text-decoration: none;
    
}

</style>
