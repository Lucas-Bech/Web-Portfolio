<template>
<v-container>
        <v-flex blue darken-3 id="education" xs12 sm6 md6 lg4>
            <h1 id="education-title" class="white--text blue darken-3 pt-1 pb-1">Education</h1>
            <v-card v-for="degree in degrees" :key="degree.graduationDate" dark class="blue-gradient ma-3">
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
</v-container>
</template>

<script>
import educationData from '../data/education.json'
export default {
    name: 'Education',
    data() {
        return {
            degrees: educationData.degrees,
        }
    }
}
</script>

<style lang="scss" scoped>
#education {
    border: 1px outset black;
    background: url('../assets/zigZagDark.png') repeat;
    border-radius: 1%;
}
#education-title {
    border-radius: 1%;
}
.blue-gradient {
    background-image: linear-gradient( 135deg, rgb(6, 131, 248) 10%, rgb(0, 58, 194) 100%);
}
</style>
