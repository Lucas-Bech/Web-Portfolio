<template>
    <footer>
      <a id="github-logo" href="https://github.com/Lucas-Bech">
        <img src="../assets/GitHub_logo.png" alt="https://github.com/Lucas-Bech">
      </a>
    </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 100%;
  margin: 0;
  background: url('../assets/blueHex.png');
  grid-area: footer;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  margin-top: 3em;
  background-color: $sweetBlue;
}
</style>
