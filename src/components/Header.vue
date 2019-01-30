<template>
  <v-toolbar app dark id="header" class="primary animated slideInLeft">
    <v-toolbar-side-icon/>
    <v-toolbar-title class="headline text-uppercase">My application</v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items>
      <v-btn flat to="/Home">Home</v-btn>
      <v-btn flat to="/Portfolio">Portfolio</v-btn>
      <v-btn flat to="/About">About</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<style lang="scss" scoped>
#header {
  background-image: linear-gradient( 135deg,rgb(0, 62, 207) 20%, rgb(0, 124, 240) 50%, rgb(0, 62, 207) 80%);
}
</style>
