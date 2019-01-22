<template>
    <nav id="nav-bar">
        <router-link to="/Home">Home</router-link>
        <router-link to="/Portfolio">Portfolio</router-link>
        <router-link to="./About">About</router-link>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style lang="scss" scoped>
    #nav-bar {
      grid-area: navbar;
        a {
          padding: 10px;
          text-decoration: none;
          background: #4717f6;
          border-radius: 5%;
          color: #e7dfdd;
          font-weight: bold;
          margin: .9em;
          &:hover {
            background-color: #110346;
            transition: background .2s;
          }
        }
    }
</style>