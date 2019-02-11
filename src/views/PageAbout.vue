<template>
<v-layout justify-space-around column nowrap align-center id="about-layout">
    <v-flex xs12 sm12 md12 lg12 class="mt-4 ma-2 mr-3">
        <v-card dark class="animated fadeInRight faster">
            <v-card-title class="grad-blue-ldl justify-center title font-weight-bold">{{ name }}</v-card-title>
            <v-card-text class="about-desc">
                <p>{{ about }}</p>
                <h3>Contact me at </h3>
                <a :href="'mailto:' + email">{{ email }}</a>
            </v-card-text>
            <v-card-actions class="grad-blue-ldl">
                <v-flex>
                    <v-btn v-for="tag in tags" :key="tag.name" 
                    round left class="grad-blue-dl mt-2 mb-2 pr-2 mr-3"  
                    :href="tag.link" target="_blank" rel="noopener noreferrer"
                    :title="tag.name">
                        <v-icon v-if="tag.icon_origin === 'mdi'" class="mr-1">{{ tag.icon }}</v-icon>
                        <i v-else-if="is_fa(tag.icon_origin)" class="mr-1" :class="get_fa_class(tag.icon_origin, tag.icon)"></i>
                        <img v-else-if="tag.icon_origin === 'assets'" class="mr-1" 
                        :src="require('../assets/' + tag.icon)" :alt="tag.name" />
                        {{tag.name}}
                    </v-btn>
                </v-flex>
            </v-card-actions>
        </v-card>
    </v-flex>
    <AboutEducation class="animated fadeInLeft faster"></AboutEducation>
</v-layout>
</template>

<script>
import AboutEducation from '../components/AboutEducation.vue'
import personData from '../data/person.json'

export default {
    name: 'PageAbout',
    components: {
        AboutEducation
    },
    data() {
        return {
            name: personData.name,
            vocation: personData.vocation,
            description: personData.description,
            email: personData.email,
            about: personData.about,
            tags: personData.tags
        }
    },
    methods: {
        
        getFile(/*file_to_get*/) {
            // Consume API to fetch files
        },
        
        get_fa_class(fa_type, fa_icon) {
            return fa_type + ' fa-' + fa_icon
        },
        
        is_fa(icon_origin) {
            return icon_origin === 'fas' || icon_origin === 'fab'
        }
    
    }
}
</script>

<style lang="scss" scoped>
#about-layout > * {
    margin-bottom: .7em;
}
p {
    line-height: 2.0;
    margin: 5px 25px;
}
.about-desc {
    background: url('../assets/zigZagDark.png') repeat;
}
#test {
    border: 1px outset blue;
}
img {
    height: 1.6em;
}
</style>
