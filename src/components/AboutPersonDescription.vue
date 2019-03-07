<template>
    <v-flex xs12 sm10 md6 lg6>
        <v-card dark>

            <v-card-title class="grad-blue-ldl justify-center title font-weight-bold">
                {{ person.aspiration }}
            </v-card-title>

            <v-card-text class="description">
                <p>{{ person.about }}</p>
            </v-card-text>
            
            <v-card-actions class="grad-blue-dl">
                <v-flex>
                    <v-btn 
                    round 
                    left 
                    class="grad-blue-dl ma-2 pr-3" 
                    :href="`mailto:${person.email}`">
                        <i class="mr-2 fas fa-envelope"></i>
                        {{ person.email }}
                    </v-btn>
                </v-flex>
            </v-card-actions>

        </v-card>
    </v-flex>
</template>

<script>
import AssetSourceManager from '../mixins/AssetSourceManager.js'

export default {
    name: "AboutPersonDescription",
    props: {
        person: {
            type: Object,
            required: true,
        },
    },
    mixins: [AssetSourceManager]
}
</script>