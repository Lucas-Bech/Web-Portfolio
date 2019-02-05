<template>
    <v-flex>
        <div>
            <h1>Documents</h1>
            <v-btn dark class="indigo darken-3" @click="getFile('resume')">
                <v-icon left class="fas fa-file-download"/>
                <span>Resumé</span>
            </v-btn>
        </div>
    </v-flex>
</template>

<script>
export default {
    name: "PersonDocuments",
    data() {
        return {
            documents: './cv.txt'
        }
    },
    methods: {
        getFile(file) {
            this.$emit('get-file', file)
        }
    }
}
</script>
