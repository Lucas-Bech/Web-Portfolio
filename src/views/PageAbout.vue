<template>
<v-layout justify-space-around row wrap align-center id="about-layout">
   
    <about-person-description 
    :person="person" 
    class="animated fadeInLeft faster">
    </about-person-description>

    <about-education 
    :degrees="person.degrees" 
    class="animated fadeInRight faster">
    </about-education>

</v-layout>
</template>

<script>
import AboutPersonDescription from '../components/AboutPersonDescription.vue'
import AboutEducation from '../components/AboutEducation.vue'
import personData from '../data/person.json'

export default {
    name: 'PageAbout',
    components: {
        AboutPersonDescription,
        AboutEducation
    },
    data() {
        return {
            person: personData
        }
    },
}
</script>

<style lang="scss" scoped>
img {
    height: 1.6em;
}
</style>
