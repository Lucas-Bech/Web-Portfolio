<template>
<div id='home'>
   <div id="about" class="animated slideInLeft fast">
      <h1>{{ name }}</h1>
      <span>{{ title }} </span>
      <p>{{ about }}</p>
   </div>
</div>
</template>

<script>
import personData from '../data/person.json'
export default {
   name: 'Home',
   data() {
      return {
         name: personData.name,
         title: personData.title,
         about: personData.about
      }
   }
}
</script>


<style lang="scss" scoped>

#home {
   grid-area: main;
   left: 0vh;
   top: 0vw;
   #about {
      text-align: left;
      position: relative;
      left: 15vw;
      top: 25vh;
      #name {
         margin: 0;
      }
   }
}
h1, p {
   color: $vividYellow;
   text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

</style>

