<template>
<div id='home'>
   <div id="about">
      <h1>Lucas Bech</h1>
      <p>Data Technician Student</p>
   </div>
</div>
</template>

<script>
export default {
   name: 'Home'
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

