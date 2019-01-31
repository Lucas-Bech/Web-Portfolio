<template>
   <v-container>
      <v-flex xs12 sm8 md6 lg5 id="card-container" class="animated fadeInLeft">
         <v-card dark id="personal-card">
            <v-card-title class="grad-blue-ldl justify-center headline font-weight-bold">{{ name }}</v-card-title>
            <v-card-text>
               <p class="white--text font-weight-medium">{{ description }}</p>
            </v-card-text>
            <v-card-actions class="justify-center">
               <v-flex>
                  <v-btn to="/Portfolio" class="blue darken-1 ml-3 mt-2 mb-2 pr-3">
                     Projects
                  </v-btn>
                  <v-btn to="/About" class="blue darken-1 ml-3 mt-2 mb-2 pr-3">
                     About
                  </v-btn>
                  <v-btn class="blue darken-1 ml-3 mt-2 mb-2 pr-2" :href="`mailto:${email}`">
                     Contact
                  </v-btn>
               </v-flex>
            </v-card-actions>
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
         vocation: personData.vocation,
         description: personData.description,
         email: personData.email
      }
   }
}
</script>

<style lang="scss" scoped>
#card-container {
   display: inline-block;
}
#personal-card {
   background-image: linear-gradient( 180deg, rgb(112, 186, 255) 0%, rgb(8, 81, 250) 39%, rgb(4, 105, 201) 85%);
}
</style>