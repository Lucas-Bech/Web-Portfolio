<template>
   <v-layout id="page-home" justify-center align-center column>
      <h1>Lucas Bech</h1>
      <h3>Datatekniker med Speciale i Programmering</h3>

      <v-flex xs12 sm10 md8 mt-3 id="link-bar" class="animated fadeInRight">
         <v-layout justify-center align-center row>
            <v-flex row>
               <v-btn dark
                  to="/Portfolio" 
                  class="grad-blue-dl ml-3 mt-2 mb-2 pr-3">
                     Se mine projekter
                  </v-btn>

                  <!--<v-btn dark
                  to="/Contact" 
                  class="grad-blue-dl ml-3 mt-2 mb-2 pr-3">
                     Kontakt
                  </v-btn>-->
            </v-flex>

            <v-flex>
            </v-flex>
            
         </v-layout>
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

<style lang="scss" scoped>

#page-home {
   overflow: hidden;
}

h1, h2 {
   color: #d3664d;
   font: normal bold 84px Tahoma,Geneva,sans-serif;
   text-transform: uppercase;
   text-shadow: 2px 2px 4px #000000;
}
h3 {
   font: normal bold 34px Tahoma,Geneva,sans-serif;
   color: #1388d6;
   text-transform: uppercase;
   text-shadow: 2px 2px 4px #000000;
}
</style>
