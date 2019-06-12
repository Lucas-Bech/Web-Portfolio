<template>
  <div id="pagetest">
    
    <v-flex id="training-form">
      <v-form>
        
        <v-text-field
        label="Name Save"
        ></v-text-field>
        
        <v-slider
        label="Learning rate"
        ></v-slider>

        <v-checkbox
        label="Use this"
        ></v-checkbox>
      
      </v-form>
    </v-flex>

    <section>
      <div>
        <div>
          <div class="features-container">
            <div class="feature">
              <div>
                <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient
                      x1="16.65%"
                      y1="87.231%"
                      x2="90.35%"
                      y2="8.197%"
                      id="feature-1-a"
                    >
                      <stop stop-color="#3217BB" offset="0%"></stop>
                      <stop stop-color="#D15680" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="100%" y1="100%" x2="0%" y2="0%" id="feature-1-b">
                      <stop stop-color="#FFF" stop-opacity=".48" offset="0%"></stop>
                      <stop stop-color="#FFF" stop-opacity=".24" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <path fill="url(#feature-1-a)" d="M64 32v32H32V32H0V0h32v32z"></path>
                    <path fill="url(#feature-1-b)" d="M16 16h32v32H16z"></path>
                  </g>
                </svg>
              </div>
              <h3 class="mt-24">Feature</h3>
              <p
                class="text-sm"
              >A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements.</p>
            </div>

            <div class="feature">
              <div>
                <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient
                      x1="16.65%"
                      y1="87.231%"
                      x2="90.35%"
                      y2="8.197%"
                      id="feature-2-a"
                    >
                      <stop stop-color="#3217BB" offset="0%"></stop>
                      <stop stop-color="#D15680" offset="100%"></stop>
                    </linearGradient>
                    <linearGradient x1="100%" y1="100%" x2="0%" y2="0%" id="feature-2-b">
                      <stop stop-color="#FFF" stop-opacity=".48" offset="0%"></stop>
                      <stop stop-color="#FFF" stop-opacity=".24" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M32 64C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32zm0-16c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16z"
                      fill="url(#feature-2-a)"
                    ></path>
                    <path fill="url(#feature-2-b)" d="M0 0h32v32H0z"></path>
                  </g>
                </svg>
              </div>
              <h3 class="mt-24">Feature</h3>
              <p
                class="text-sm"
              >A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements.</p>
            </div>

            <feature description="the description property"
            svg='<defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="feature-4-a">
                      <stop stop-color="#3217BB" offset="0%"></stop>
                      <stop stop-color="#D15680" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <path d="M64 32H32V0c17.673 0 32 14.327 32 32z" fill="url(#feature-4-a)"></path>
                    <path
                      d="M32 64H0V32c17.673 0 32 14.327 32 32z"
                      fill="url(#feature-4-a)"
                      transform="rotate(180 16 48)"
                    ></path>
                    <path fill-opacity="0.32" fill="#FFF" d="M16 16h32v32H16z"></path>
                  </g>'
            ></feature>

            <div class="feature">
              <div>
                <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="feature-4-a">
                      <stop stop-color="#3217BB" offset="0%"></stop>
                      <stop stop-color="#D15680" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <path d="M64 32H32V0c17.673 0 32 14.327 32 32z" fill="url(#feature-4-a)"></path>
                    <path
                      d="M32 64H0V32c17.673 0 32 14.327 32 32z"
                      fill="url(#feature-4-a)"
                      transform="rotate(180 16 48)"
                    ></path>
                    <path fill-opacity="0.32" fill="#FFF" d="M16 16h32v32H16z"></path>
                  </g>
                </svg>
              </div>

              <h3 class="mt-24">Feature</h3>
              <p
                class="text-sm"
              >A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design elements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta section">
      <div class="cta-content text-center">
        <h2 class="section-title">Check it out on GitHub</h2>
        <p
          class="section-paragraph"
        >Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
        <div class="section-cta">
          <a class="button button-primary button-shadow" href="#">GitHub</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Feature from '../components/Feature.vue'

export default Vue.extend({
  components: {
    Feature
  }
})
</script>

<style lang="scss" scoped>
#training-form {
  color: white;
}
#pagetest {
  width: 100%;
  height: 100%;
  color: #708396;
  background-image: linear-gradient(
    25deg,
    #040404be 100%,
    rgba(29, 32, 38, 0.527) 80%
  );
}
.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, 40vw);
  justify-content: center;
}
.feature {
  padding: 8px 12px;
  width: 344px;
  max-width: 344px;
  flex-grow: 1;
  margin-left: auto;
  margin-right: auto;
}

.has-bottom-divider::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: block;
  height: 1px;
  background: #474452;
  background: linear-gradient(
    to right,
    rgba(71, 68, 82, 0.24) 0,
    #474452 50%,
    rgba(71, 68, 82, 0.24) 100%
  );
}
.has-top-divider::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: block;
  height: 1px;
  background: #474452;
  background: linear-gradient(
    to right,
    rgba(71, 68, 82, 0.24) 0,
    #474452 50%,
    rgba(71, 68, 82, 0.24) 100%
  );
}
</style>
