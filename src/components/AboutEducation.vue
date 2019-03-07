<template>
    <v-flex id="education" class="grad-blue-ldl" xs12 sm6 md5 lg5>
        <h1 class="white--text pt-3">Education</h1>
        <about-education-degree 
        v-for="degree in degrees" 
        :key="degree.graduationDate"
        :degree="degree">
        </about-education-degree>
    </v-flex>
</template>

<script>
import AboutEducationDegree from '../components/AboutEducationDegree.vue'

export default {
    name: 'AboutEducation',
    components: {
        AboutEducationDegree
    },
    props: {
        degrees: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
#education {
    border-radius: 1%;
}
</style>
