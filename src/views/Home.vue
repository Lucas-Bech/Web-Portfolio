<template>
   <v-container>
      <v-flex xs12 sm6 md4 lg5 id="card-container" class="animated fadeInLeft">
         <v-card dark id="personal-card">
            <v-card-title class="highlight-light-title justify-center title font-weight-bold">{{ name }}</v-card-title>
            <v-card-text>
               <p class="white--text">{{ description }}</p>
            </v-card-text>
         </v-card>
      </v-flex>
   </v-container>
</template>

<script>
import personData from '../data/person.json'
export default {
   name: 'Home',
   data() {
      return {
         name: personData.name,
         title: personData.title,
         description: personData.description
      }
   }
}
</script>

<style lang="scss" scoped>
#card-container {
   display: inline-block;
}
#personal-card {
   background-image: linear-gradient( 180deg, rgb(121, 183, 241) 0%, rgb(8, 81, 250) 75%, rgb(23, 109, 189) 100%);
}
.highlight-light-title {
    background-image: linear-gradient( 135deg,rgb(0, 124, 240) 5%, rgba(0, 62, 207, 0.74) 35%, rgba(0, 62, 207, 0.521) 65%, rgb(0, 124, 240) 95%);
}
</style>