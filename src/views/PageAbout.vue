<template>
    <v-layout justify-space-around row wrap align-center>
    
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
// Components
import AboutPersonDescription from '../components/AboutPersonDescription.vue'
import AboutEducation from '../components/AboutEducation.vue'

// Data
import personData from '../data/person.json'

export default {
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