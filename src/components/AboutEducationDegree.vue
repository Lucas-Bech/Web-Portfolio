<template>
<v-flex>
    <v-card 
    color="rgba(0,0,0,0)"  
    dark 
    class="ma-3">

        <v-card-title 
        class="justify-center title font-weight-bold" 
        primary-title>
            {{ degree.title }}
        </v-card-title>

        <div class="subheading">
            {{ degree.school }}
        </div>

        <v-card-text>
            <div class="justify-center font-weight-thin">
                {{ degree.enrollDate }} - {{ degree.graduationDate }}
            </div>
        </v-card-text>

    </v-card>
</v-flex>
</template>

<script>
export default {
    name: 'AboutEducationDegree',
    props: {
        degree: {
            type: Object,
            required: true,
        },
    },
}
</script>