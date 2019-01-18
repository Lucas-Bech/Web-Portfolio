<template>
<div id="about" class="animated slideInRight fast">
    <Education/>
</div>
</template>

<script>
import Education from '../components/Education.vue'
export default {
    name: 'About',
    components: {
        Education
    }
}
</script>

<style lang="scss" scoped>
#about {
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(10vh, 50vh));
}
</style>
