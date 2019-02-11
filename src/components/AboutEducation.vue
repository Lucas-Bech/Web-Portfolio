<template>
<v-flex color="" id="education" class="grad-blue-ldl" xs12 sm12 md5 lg12>
    <!--<h1 id="education-title" class="white--text pt-1 pb-1">Education</h1>-->
    <v-card 
    flat 
    color="rgba(0,0,0,0)" 
    v-for="degree in degrees" 
    :key="degree.graduationDate" 
    dark 
    class="ma-3">
            <v-card-title class="justify-center title font-weight-bold" primary-title>
                {{ degree.title }}
            </v-card-title>
            <div class="subheading">{{ degree.school }}</div>
        <v-card-text>
            <div class="justify-center font-weight-thin">
                {{ degree.enrollDate }} - {{ degree.graduationDate }}
            </div>
        </v-card-text>
    </v-card>
</v-flex>
</template>

<script>
import educationData from '../data/education.json'
export default {
    name: 'AboutEducation',
    data() {
        return {
            degrees: educationData.degrees,
        }
    }
}
</script>

<style lang="scss" scoped>
#education {
    //border: 1px outset black;
    border-radius: 1%;
}
#education-title {
    border-radius: 1%;
}
.blue-gradient {
    //background-image: linear-gradient( 135deg, rgb(6, 131, 248) 10%, rgb(0, 58, 194) 100%);
}
</style>
