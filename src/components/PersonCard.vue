<template>
<v-flex xs12 sm6 md4 lg3>
    <v-card dark class="blue darken-2 ma-3 animated fadeInLeft faster">
       <v-card-title class="justify-center title font-weight-bold" primary-title>{{ name }}</v-card-title>
       <v-card-text>
          <p class="subheading">{{ title }}</p>
          <p>{{ description }}</p>
          <p>{{ age }}</p>
       </v-card-text>
    </v-card>
</v-flex>
</template>

<script>
import personData from '../data/person.json'
export default {
    name: 'PersonCard',
    data() {
        return {
            name: personData.name,
            title: personData.title,
            description: personData.description,
            age: personData.age
        }
    }
}
</script>
