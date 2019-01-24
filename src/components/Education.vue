<template>
<v-container>
    <v-flex xs12 sm6 md4 lg3 v-for="degree in degrees" :key="degree.graduationDate">
        <v-card hover dark class="info ma-3">
                <v-card-title class="justify-center title font-weight-bold" primary-title>
                    {{ degree.title }}
                </v-card-title>
                <div class="subheading">{{ degree.school }}</div>
            <v-card-text>
                <div class="justify-center font-weight-thin">
                    {{ degree.enrollDate }} - {{ degree.graduationDate }}
                </div>
            </v-card-text>
        </v-card>
    </v-flex>
</v-container>
</template>

<script>
import educationData from '../data/education.json'
export default {
    name: 'Education',
    data() {
        return {
            degrees: educationData.degrees,
        }
    }
}
</script>

<style lang="scss" scoped>
#education {
    background: white;
    margin: auto;
    border-radius: 15% 15% 3% 3%;
    #degreeTable {
        display: grid;
        grid-template-rows: repeat(auto-fit, 1fr);
        grid-row-gap: 1vh;
        padding: 1vh;
        border-radius: 2%;
        margin: 10px;
        background-color: blue;
        .degree {
            display: grid;
            grid-template-columns: 1fr .1fr;
            grid-column-gap: .8em;
            align-items: center;
            margin: 0;
            h3 {
                margin: 0;
            }
        }
    }
}
.icon.expandDown {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin: auto;
    background: url('../assets/expandDown.svg') no-repeat top left;
    background-size: cover;
    -webkit-transition: width .2s; /* Safari */
    transition: width .2s;
    &:hover {
        cursor: pointer;
        height: 25px;
        width: 25px;
    }
}
.expand {
    width: 30px;
    height: 30px;
    text-align: center;
}
</style>

