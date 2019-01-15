<template>
    <div>
        <h3>{{ title }}</h3>
        <Technologies/>
    </div>
</template>

<script>
import Technologies from './Technologies.vue'
export default {
    name: 'Card',
    props: ['title'],
    data() {
        return {
            //title: this.data.title
        }
    },
    components: {
        Technologies
    }
}
</script>

<style lang="scss" scoped>
    div {
        display: grid;
        grid-template-areas: 
        "title       description"
        "technologies technologies";
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(2, 1fr);
        background: url('../assets/bg_prism.png');
        border: 2px solid black;
        width: 100%;
        height: 100%;
        
    }
    h3 {
        grid-area: title;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        font-size: 3rem;
        width: auto;
        height: auto;
        margin: 0 auto;
        padding: 0;
    }
    p {
        //grid-area: description;
    }
</style>
