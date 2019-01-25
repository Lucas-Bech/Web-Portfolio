<template>
   <v-container>
      <v-flex xs12 sm6 md4 lg3>
            <v-card dark class="info ma-3">
               <v-card-title class="justify-center title font-weight-bold 
               animated fadeInLeft faster">{{ name }}</v-card-title>
               <v-card-text>
                  <p class="animated bounceInRight faster subheading">{{ title }} </p>
                  <p class="animated bounceInUp faster">{{ description }}</p>
               </v-card-text>
            </v-card>            
      </v-flex>
   </v-container>
</template>

<script>
import personData from '../data/person.json'
export default {
   name: 'Resume',
   data() {
      return {
         name: personData.name,
         title: personData.title,
         description: personData.description
      }
   }
}
</script>

