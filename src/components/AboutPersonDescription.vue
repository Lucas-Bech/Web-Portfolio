<template>
    <v-flex xs12 sm10 md6 lg6>
        <v-card dark>
            <v-card-title class="grad-blue-ldl justify-center title font-weight-bold">{{ person.aspiration }}</v-card-title>
            <v-card-text class="degree-description">
                <p>{{ person.about }}</p>
            </v-card-text>
            <v-card-actions class="grad-blue-dl">
                <v-flex>
                    <v-btn round left class="grad-blue-dl mt-2 mb-2 pr-2 mr-3 ml-3 mt-2 mb-2 pr-2" :href="`mailto:${person.email}`">
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
        person: Object
    },
    mixins: [AssetSourceManager]
}
</script>

<style lang="scss" scoped>
.degree-description {
    display: flex;
    align-items: center;
    background: url('../assets/zigZagDark.png') repeat;
    min-height: 10em;
    p {
        line-height: 2.0;
        font-size: 1.2em;
        margin: auto;
        max-width: 85%;
    }
}
</style>
