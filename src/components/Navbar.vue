<template>
    <nav>
        <router-link to="/Home">Home</router-link>
        <router-link to="/Projects">Projects</router-link>
        <router-link to="/Skills">Skills</router-link>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style lang="scss" scoped>
    nav {
      grid-area: navbar;
      width: auto;
      height: 100%;
    a {
      text-align: center;
      padding: 10px;
      text-decoration: none;
      background: #4717f6;
      border-radius: 3px;
      color: #e7dfdd;
      font-weight: bold;
      margin: .9em;
      &:hover {
        background-color: #2700b3;
        background: $vividYellow;
        transition: background .2s;
      }
    }
    }
</style>


