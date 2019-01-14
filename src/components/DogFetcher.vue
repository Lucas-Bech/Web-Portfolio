<template>
  <div id="dogFetcher">
    <div>
      <h1>Projects</h1>
    </div>
    <div id="optionsContainer">
      <form id="fetchDog" @submit.prevent="fetchDog">
        <h2>Dog Filter</h2>
        <v-select class="dropdown" label="name" :options="breeds" v-model="breed"></v-select>
        <input type="submit" value="Fetch Dog">
      </form>
    </div>

    <div id="imageContainer">
      <img v-bind:src="image" alt="The dog has gone missing">
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DogFetcher",
  data() {
    return {
      breed: { name: "Random", api_value: "random" },
      image: require("../assets/loading.gif"),
      breeds: [], // Properties: name, api_value
      API: {
        breedList: "https://dog.ceo/api/breeds/list/all",
        random: "https://dog.ceo/api/breeds/image/random"
      }
    };
  },
  computed: {
    of_breed() {
      return (
        "https://dog.ceo/api/breed/" + this.breed.api_value + "/images/random"
      );
    }
  },
  methods: {
    fetchDog() {
      let img_url =
        this.breed.api_value == "random" ? this.API.random : this.of_breed;
      this.image = require("../assets/loading.gif");
      axios.get(img_url).then(response => {
        this.image = response.data.message;
      });
    },
    populateSelection() {
      this.breeds.push({ name: "Random", api_value: "random" });

      // Retrieve list of available breeds from API
      const request = new XMLHttpRequest();

      request.onreadystatechange = () => {
        if (request.readyState !== 4 || request.status !== 200) return;

        let breedList = JSON.parse(request.response)["message"];
        for (let breed in breedList) {
          let breed_origins = breedList[breed];

          // No origins
          if (breed_origins.length === 0) {
            this.breeds.push({
              name: this.capitalizeWord(breed),
              api_value: breed
            });
            continue;
          }
          // Has origins
          breed_origins.forEach(breed_origin => {
            let api_value = breed + "-" + breed_origin;
            let name =
              this.capitalizeWord(breed_origin) +
              " " +
              this.capitalizeWord(breed);
            this.breeds.push({ name: name, api_value: api_value });
          });
        }
      };
      request.open("GET", this.API.breedList, true);
      request.send();
    },
    capitalizeWord(word) {
      return word[0].toUpperCase() + word.slice(1);
    }
  },
  beforeMount() {
    this.fetchDog();
    this.populateSelection();
  }
};
</script>

<style lang="scss" scoped>

h1 {
  font-size: 10em;
  text-align: center;
}
.container {
  margin: 0.5%;
}
#dogFetcher {
  grid-area: main;
  display: grid;
  grid-template-columns: 100vw minmax(10vw, 50vw) minmax(10vw, 50vw);
}
#imageContainer {
  position: relative;
  background-repeat: no-repeat;
  max-width: 615px;
  height: auto;
  background-size: cover;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/dogpaws.jpg");
  background-position: center top;
  max-height: 350px;
  color: white;

  img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 0.5em;
    background-size: contain;
  }
}
#optionsContainer {
  background-image: url("../assets/dog.jpg");
  background-repeat: no-repeat;
  max-width: 615px;
  max-height: 440px;
  margin-left: 100px;

  form {
    position: relative;
    float: right;
    right: 1em;
    top: 1.5em;

    input[type="submit"] {
      border-radius: 0.5em;
      padding: 10px;
      text-decoration: none;
      background: #4717f6;
      border-radius: 3px;
      color: #e7dfdd;
      font-weight: bold;
      margin-right: 15px;
    }
  }
}
body {
  background-color: #121212;
}
h2 {
  color: #ffdb3e;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
$dark: #35414a;
$semilight: #86919a;
$blue: #5aafee;
.dropdown {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: white;
}
v-option {
  color: #f7ce3e;
  background: none;
  outline: none;
  box-shadow: none;
  &:hover {
    border: 10px black solid;
    background-color: #0a1612;
    border: none;
  }
  padding: 1em;
  cursor: pointer;
  background-color: #485761;
}
h1 {
  color: $vividYellow;
}
</style>