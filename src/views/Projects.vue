<template>
    <div id="projects">
        <div class="card">
            
        </div>
        <div class="card">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
#projects {
    margin: 0 5vw 0 5vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20vw, auto));
    grid-template-rows: repeat(auto-fit, minmax(20vh, 50vh));
    grid-row-gap: 5vh;
    grid-column-gap: 10vh;
    .card {
        background: white;
    }
}
h1 {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>