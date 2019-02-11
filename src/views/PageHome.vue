<template>
<v-layout align-center id="home-layout">
      <v-flex>
         <v-card flat dark id="presentation">
            <v-card-title class=" justify-center headline font-weight-bold">{{ name }}</v-card-title>
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
   
   
</v-layout>
</template>

<script>
import personData from '../data/person.json'

export default {
   name: 'PageHome',
   components: {
   },
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

<style lang="scss" scoped>
#presentation {
   background-color: rgba(0,0,0,0);
   
}
#home-layout {
   margin-top: .9em;
}
.topic-bar {
   width: 100%;
   height: auto;
   //background: #FAFAFA;
}
#personal-card {
   background-image: linear-gradient( 180deg, rgb(112, 186, 255) 0%, rgb(8, 81, 250) 39%, rgb(4, 105, 201) 85%);
}
</style>