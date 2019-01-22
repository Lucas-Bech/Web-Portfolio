<template>
    <div id="education">
        <h2>Education</h2>
        <div id="degreeTable">
            <div class="degree" v-for="degree in degrees" :key="degree.graduationDate">
                <h3>{{ degree.title }}</h3>
                <div class="expand">
                    <i class="icon expandDown">
                    <!--<p>Enrolled {{ degree.enrollDate }}</p>
                    <p>Graduating {{ degree.graduationDate }}</p>-->
                    </i>
                </div>
            </div>
        </div>
    </div>
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

