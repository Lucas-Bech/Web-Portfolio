<template>
    <div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['data'],
    data() {
        return {
            image: this.data.image
        }
    }
}
</script>

<style lang="scss" scoped>
div {
        background: url('../assets/bg_prism.png');
        border: 2px solid black;
    }
</style>
