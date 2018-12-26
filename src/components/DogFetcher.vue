<template>
  <div class="container">
    <div class="grid-3x3 grid-gold-theme">
      <div class="dog_options">
        <form id="dogFilter" @submit.prevent="fetchDog">
          <h2>Dog Filter</h2>
          <select v-model="breed" name="breed">
            <option value="option value">Option value</option>
          </select>
          <span>{{ breed }}</span>
          <input type="submit" value="Fetch Dog">
        </form>
      </div>
      <div class="dog_img">
        <div id="dogFetcher">
          <img :image="src='images/loading.gif'" alt="The dog has gone missing">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DogFetcher",
  data() {
    return {
      breed: "African",
      image: ""
    };
  },
  methods: {
    fetchDog(submitEvent) {
      console.log("Breed: " + this.breed);
      console.log("Image: " + this.image);
    }
  }
};
/*
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

class DogAPI {
  constructor(dom_image, dogFilter) {
    this.dom_image = dom_image;

    // Filter Form
    this.dogFilter = dogFilter;
    this._initFilter();

    $(document).on("submit", "#dogFilter", function() {
      DogFetcher.fetchDog($("#dogFilter > select").val());
      return false;
    });
  }

async _initFilter() {
    // Random Field
    var option = document.createElement("option");
    option.innerHTML = "Random";
    option.setAttribute("value", "");
    this.dogFilter.appendChild(option);

    // Append each breed from API to selection
    let response = await this._getBreedList();
    var breeds = response["message"];

    for (let breed in breeds) {
      let dog_origins = breeds[breed].length;

      if (dog_origins === 0) {
        option = document.createElement("option");
        option.setAttribute("value", breed);
        option.innerHTML = capitalizeWord(breed);
        this.dogFilter.appendChild(option);
      } else
        for (let origin = dog_origins - 1; origin > -1; origin--) {
          option = document.createElement("option");
          option.setAttribute("value", breed + "-" + breeds[breed][origin]);
          option.innerHTML =
            capitalizeWord(breeds[breed][origin]) + " " + capitalizeWord(breed);
          this.dogFilter.appendChild(option);
        }
    }
  }

  async _getBreedList() {
    return await $.ajax({
      type: "GET",
      url: "https://dog.ceo/api/breeds/list/all"
    });
  }

  // AJAX -> PHP -> API
  async fetchDog(breed) {
    DogFetcher._loadImage("images/loading.gif");

    var dogURL = await $.ajax({
      type: "GET",
      url: "fetchDog.php",
      data: {
        breed: breed
      }
    });
    DogFetcher._loadImage(dogURL);
  }

  _loadImage(imgSrc) {
    this.dom_image.attr("src", imgSrc);
  }
}

var DogFetcher = new DogAPI(
  console.log(document.getElementById("#dogFetcher"))
  //$("#dogFetcher > img")
  //$("#dogFilter > select")[0]
);
DogFetcher.fetchDog();
*/
</script>

<style>
.container {
  margin: 1.5%;
}
.grid-3x3 {
  display: grid;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background-color: #232323;
  padding: 1em;
  border-radius: 0.5em;
}
.grid-3x3 > div {
  background-color: #090d12;
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
.grid-gold-theme > div {
  border: 1px inset black;
  margin: 1em;
  border-radius: 0.5em;
}
.dog_img {
  position: relative;
  background-repeat: no-repeat;
  max-width: 615px;
  height: auto;
  background-size: cover;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(images/dogpaws.jpg);
  background-position: center top;
  height: 350px;
  color: white;
}
.dog_options {
  background-image: url(images/dog.jpg);
  background-repeat: no-repeat;
  max-width: 615px;
}
.dog_options form {
  position: relative;
  float: right;
  right: 1em;
  top: 1.5em;
}
body {
  background-color: #121212;
}
#dogFetcher {
  height: 100%;
  width: auto;
}
#dogFetcher > img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 0.5em;
  background-size: contain;
}
h2 {
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
select {
  border-radius: 0.5em;
}
input[type="button"] {
  border-radius: 0.5em;
}
</style>