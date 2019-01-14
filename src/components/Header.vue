<template>
    <header>
      <Icon/>
      <Navbar/>
    </header>
</template>

<script>
import Icon from './Icon.vue'
import Navbar from './Navbar.vue'

export default {
  name: "Header",
  components: {
    Icon,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  header {
    grid-area: header;
    display: grid;
    grid-template-areas: "icon title navbar";
    grid-template-columns: minmax(20vw, 45vw);
    width: 100%;
    height: 100%;
    background: url('../assets/zigZagDark.png') repeat;
    right: 0;
    top: 0;
    padding: 20px;
    align-content: center;
}
</style>
