<template>
    <footer id="footer">
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
#footer {
  grid-area: footer;
  display: grid;
  grid-template-columns: repeat(3, minmax(0vw, 1fr));
  align-items: center;
  width: 100%;
  height: auto;
  background: url('../assets/darkHex.png');
}
</style>
