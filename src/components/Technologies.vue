<template>
    <ul>
        <li>
            <Technology/>
        </li>
    </ul>
</template>

<script>
import Technology from './Technology.vue'
export default {
    name: "Technologies",
    components: {
        Technology
    }
}
</script>

<style lang="scss" scoped>
ul {
    grid-area: technologies;
}
</style>

