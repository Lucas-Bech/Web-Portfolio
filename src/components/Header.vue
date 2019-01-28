<template>
  <v-toolbar app dark class="primary animated slideInLeft">
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