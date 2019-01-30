<template>
<v-container id="about" class="animated fadeInLeft faster">
    <Education/>
    <PersonCard/>
</v-container>
</template>

<script>
import Education from '../components/Education.vue'
import PersonCard from '../components/PersonCard'
export default {
    name: 'About',
    components: {
        Education,
        PersonCard
    },
    methods: {
        getFile(value) {
            console.log("get called with value: " + value)
        }
    }
}
</script>