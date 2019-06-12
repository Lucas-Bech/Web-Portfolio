<template>
    <div class="feature">
              <div>
                
              </div>
              <h3 class="feature-title mt-24">Feature</h3>
              <p
                class="text-sm"
              >{{ description }}</p>

            
            </div>

            

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        description: {
            type: String,
            required: true
        }
    }
})
</script>

<style lang="scss" scoped>
h3 {
    color: #fff;
}
</style>
