<template>
<v-flex>
    <v-card dark>
        <v-card-title class="grad-blue-ldl justify-center title font-weight-bold">{{ title }}</v-card-title>
        <v-card-text class="description">
            <p>{{ description }}</p>
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
</template>

<script>
export default {
    name: 'PortfolioProject',
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            title: this.project.title,
            description: this.project.description,
            tags: this.project.tags
        }
    },
    methods: {
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
.description {
    background: url('../assets/zigZagDark.png') repeat;
}
img {
    height: 1.6em;
}
p {
    line-height: 2.0;
}
</style>
