<template>
    <footer>
      <a id="github-logo" href="https://github.com/Lucas-Bech">
        <img src="../assets/GitHub_logo.png" alt="https://github.com/Lucas-Bech">
      </a>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>


<style lang="scss" scoped>
footer {
  grid-area: footer;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../assets/blueHex.png');
  background-color: $sweetBlue;
  a {
    margin: 5px;
  }
}
</style>
