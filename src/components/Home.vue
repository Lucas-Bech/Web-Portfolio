<template>
<div id='home'>
   <div id="about">
      <h1 id="name">Lucas Bech</h1>
      <p id="description">Data Technician Student</p>
   </div>
</div>
</template>

<script>

export default {
   name: 'Home',
   created: function() {
      this.$parent.$data.background_image = require('../assets/background.svg');
   }
}
</script>


<style lang="scss" scoped>

#home {
   position: relative;
   left: 0;
   top: 0;
   #about {
      text-align: left;
      position: relative;
      left: 15vw;
      top: 25vh;
      #name {
         margin: 0;
      }
      #description {

      }
   }
}

</style>

