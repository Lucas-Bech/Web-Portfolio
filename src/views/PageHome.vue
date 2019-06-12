<template>
   <v-layout justify-center align-center>
      <v-flex xs12 sm10 md8 class="animated fadeInLeft">
         <v-card dark class="grad-blue-ldl">

            <v-card-title class=" justify-center headline font-weight-bold pt-4">
               {{ name }}
            </v-card-title>

            <v-card-text class="description">
               <p class="white--text font-weight-medium">
                  {{ description }}
               </p>
            </v-card-text>

            <v-card-actions>
               <v-flex>
                  <v-btn 
                  to="/Portfolio" 
                  class="grad-blue-dl ml-3 mt-2 mb-2 pr-3">
                     Projects
                  </v-btn>

                  <v-btn 
                  to="/About" 
                  class="grad-blue-dl ml-3 mt-2 mb-2 pr-3">
                     About
                  </v-btn>
               </v-flex>
            </v-card-actions>

         </v-card>
      </v-flex>   
   </v-layout>
</template>

<script>
import personData from '../data/person.json'

export default {
   data() {
      return {
         name: personData.name,
         vocation: personData.vocation,
         description: personData.description,
         email: personData.email,
         about: personData.about
      }
   }
}
</script>