<template>
<v-flex xs12 sm6 md4 lg3>
    <v-card dark class="blue darken-2 ma-3 animated fadeInLeft faster">
       <v-card-title class="justify-center title font-weight-bold" primary-title>About me</v-card-title>
       <v-card-text>
              <span>Name: </span>{{ name }}
          <span>Age: {{ age }}</span>
          <span>Vocation: {{ vocation }}</span>
          <span>{{ description }}</span>
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
            vocation: personData.vocation,
            title: personData.title,
            description: personData.description,
            age: personData.age
        }
    }
}
</script>

<style lang="scss" scoped>
p::first-letter {
    font-size: 130%;
    color: $lightBlueTint;
}
</style>