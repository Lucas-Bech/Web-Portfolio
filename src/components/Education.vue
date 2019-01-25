<template>
<v-container>
    <v-flex xs12 sm6 md4 lg3 v-for="degree in degrees" :key="degree.graduationDate">
        <v-card dark class="info ma-3">
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