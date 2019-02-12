<template>
    <v-flex xs12 sm12 md12 lg12>
        <v-card dark class="animated fadeInRight faster">
            <v-card-title class="grad-blue-ldl justify-center title font-weight-bold">About Me</v-card-title>
            <v-card-text class="degree-description">
                <p>{{ person.about }}</p>
            </v-card-text>
            <v-card-actions class="grad-blue-dl">
                <v-flex>
                    <v-btn round left class="grad-blue-dl mt-2 mb-2 pr-2 mr-3 ml-3 mt-2 mb-2 pr-2" :href="`mailto:${email}`">
                        {{ person.email }}
                    </v-btn>
                    <v-btn v-for="tag in person.tags" :key="tag.name" 
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
