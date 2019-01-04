<template>
    <div id="dogFetcher">
      
      <div id="optionsContainer">
        <form id="fetchDog" @submit.prevent="fetchDog">
          <h2>Dog Filter</h2>
          <select v-model="breed">
            <option
              v-for="(dog, index) in breeds"
              :key="index"
              :value="dog.api_value"
            >{{ dog.name }}</option>
          </select>
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
      breed: "random",
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
      return "https://dog.ceo/api/breed/" + this.breed + "/images/random";
    }
  },
  methods: {
    fetchDog() {
      let img_url = this.breed == "random" ? this.API.random : this.of_breed;
      this.image = require("../assets/loading.gif");
      axios
        .get(img_url)
        .then(response => {
          this.image = response.data.message;
        })
        .catch(error => console.log(error));
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

<style lang="scss">
.container {
  margin: 0.5%;
}
#dogFetcher {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: #232323;
  padding: 1em;
  border-radius: 0.5em;
  div {
    background-color: #090d12;
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
    border: 1px inset black;
    margin: 1em;
    border-radius: 0.5em;
  }
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
  height: 350px;
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
  
  form {
    position: relative;
    float: right;
    right: 1em;
    top: 1.5em;
    
    select {
    border-radius: 0.5em;
    }

    input[type="submit"] {
    border-radius: 0.5em;
    }
    
  }

}
body {
  background-color: #121212;
}
h2 {
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
</style>