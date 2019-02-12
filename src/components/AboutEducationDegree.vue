<template>
<v-flex class="blue-gradients">
    <v-card 
    flat 
    color="rgba(0,0,0,0)"  
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
export default {
    name: 'AboutEducationDegree',
    props: {
        degree: Object
    }
}
</script>

<style lang="scss" scoped>
.blue-gradient {
    background-image: linear-gradient( 135deg, rgb(6, 131, 248) 10%, rgb(0, 58, 194) 100%);
}
</style>
