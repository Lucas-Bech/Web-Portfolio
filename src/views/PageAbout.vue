<template>
<v-layout justify-space-around wrap align-center>
    <!-- Mail
    <v-flex class="white">
        <v-form action="" method="POST" enctype="text/plain">
            <label>Name</label>
            <input type="text" name="Sender" required>
            
            <input type="submit" value="Send">
        </v-form>
    </v-flex>
    -->
    <AboutEducation class="animated fadeInLeft faster"></AboutEducation>
    <v-flex xs12 sm12 md6 lg6 class="mt-4 ma-2 mr-3">
        <v-card dark class="animated fadeInRight faster">
            <v-card-title class="grad-blue-ldl justify-center title font-weight-bold">{{ name }}</v-card-title>
            <v-card-text class="about-desc">
                <p>{{ about }} If you think I'd be a fit for your company</p>
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
