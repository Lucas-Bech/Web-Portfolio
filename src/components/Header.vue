<template>
    <header id="header">
      <img src="../assets/favicon.svg">
      <Navbar/>
    </header>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: "Header",
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  #header {
    display: grid;
    grid-template-areas: "icon title navbar";
    grid-template-columns: minmax(20vw, 45vw);
    background: url('../assets/zigZagDark.png') repeat;
    padding: 20px;
    align-content: center;
}
</style>
