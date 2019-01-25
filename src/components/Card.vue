<template>
<v-flex>
    <v-card dark class="info">
        <v-card-title class="indigo justify-center title font-weight-bold">{{ project.title }}</v-card-title>
        <v-card-text id="description">
            <p>{{ project.description }}</p>
        </v-card-text>
        <v-card-actions class="indigo justify-center">
            <div v-for="tag in project.tags" :key="tag.name" class="ml-3">
                <v-btn round
                 style="background-color: #2196F3" :href="tag.link" 
                :title="tag.name">
                    <img v-if="tag.image != ''" 
                    :src="require('../assets/' + tag.image)" :alt="tag.name" />
                    <v-icon v-else-if="tag.icon != ''">{{ tag.icon }}</v-icon>
                    {{tag.name}}
                </v-btn>
            </div>
        </v-card-actions>
    </v-card>
</v-flex>
</template>

<script>
export default {
    name: 'Card',
    props: ['project'],
}
</script>

<style lang="scss" scoped>
#description {
    background: url('../assets/zigZagDark.png') repeat;
}
a {
    display: inline-block;
    margin: auto 10px;
    color: white;
    padding: .4em .6em .4em .6em;
    background-color: rgba(10, 10, 200, 1);
    border-radius: 2rem;
    text-decoration: none;   
}
img {
    max-height: 30px;
}
</style>
