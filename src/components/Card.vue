<template>
<v-flex class="card">
    <v-card dark class="info">
        <v-card-title class="highlight-light-title justify-center title font-weight-bold">{{ project.title }}</v-card-title>
        <v-card-text id="description">
            <p>{{ project.description }}</p>
        </v-card-text>
        <v-card-actions class="tag-bar justify-center">
            <div>
                <v-btn round
                v-for="tag in project.tags" :key="tag.name" 
                class="tag ml-3 mt-2 mb-2 pr-2"  
                :href="tag.link" target="_blank" 
                rel="noopener noreferrer"
                :title="tag.name">
                    <img class="mr-1" v-if="tag.image != ''" 
                    :src="require('../assets/' + tag.image)" :alt="tag.name" />
                    <v-icon class="mr-1" v-else-if="tag.icon != ''">{{ tag.icon }}</v-icon>
                    <span>{{tag.name}}</span>
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
.highlight-light-title {
    background-image: linear-gradient( 135deg,rgb(0, 124, 240) 5%, rgba(0, 62, 207, 0.74) 35%, rgba(0, 62, 207, 0.521) 65%, rgb(0, 124, 240) 95%);
}
.tag-bar {
    background-image: linear-gradient( 135deg,rgb(0, 124, 240) 0%, rgba(0, 62, 207, 0.521) 15%);
}
.tag {
    background-image: linear-gradient( 105deg, rgb(1, 60, 116) 20%, rgb(6, 65, 201) 75%, rgb(33, 94, 236) 100%);
}
</style>
