<template>
<div id="about" class="animated fadeInRight faster">
    <Education/>ø
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
    grid-area: main;
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(1fr, 1fr));
    width: 100%;
    height: 100%;
}
</style>
