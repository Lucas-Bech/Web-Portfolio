<template>
    <div id="education">
        <h2>Education</h2>
        <div id="degreeTable">
            <div class="degree" v-for="degree in degrees" :key="degree.graduationDate">
                <h3>{{ degree.title }}</h3>
                <span class="icon expandDown">
                    <p>Enrolled {{ degree.enrollDate }}</p>
                    <p>Graduating {{ degree.graduationDate }}</p>
                </span>
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
    background: whitesmoke;
    max-width: 75vw;
    margin: auto;
    #degreeTable {
        display: grid;
        grid-template-rows: repeat(auto-fit, minmax(5vh, 20vh));
        #degree {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
}
.icon.expandDown {
  background: url('../assets/expandDown.png');
}
</style>

