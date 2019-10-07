<template>
  <v-footer 
  app 
  dark 
  id="the-footer"
  class="animated slideInLeft">

      <v-btn 
      v-for="item in items" 
      :key="item.name" 
      left
      flat
      :href="item.link" target="_blank" rel="noopener noreferrer"
      :title="item.name">
        
        <v-icon 
        v-if="item.icon_origin === 'mdi'" 
        class="mr-1">
        {{ item.icon }}
        </v-icon>
      
      <i 
      v-else-if="is_fa(item.icon_origin)" 
      class="mr-1" 
      :class="get_fa_class(item.icon_origin, item.icon)">
      </i>

      <img 
      v-else-if="item.icon_origin === 'assets'" 
      class="mr-1" 
      :src="require('../assets/' + item.icon)" 
      :alt="item.name" />
        {{item.name}}
      </v-btn>
        
  </v-footer>
</template>

<script>
// Mixins
import AssetSourceManager from '../mixins/AssetSourceManager.js'

// Data
import footerData from '../data/footer.json'

export default {
  data() {
    return {
      items: footerData.items
    }
  },
  mixins: [AssetSourceManager]
}
</script>

<style lang="scss" scoped>
#the-footer {
  //background-image: linear-gradient( 135deg,rgb(0, 62, 207) 10%, rgb(0, 106, 206) 100%);
  //background-image: linear-gradient(90deg, rgb(27, 26, 26), rgb(24, 26, 32));
  background-image: linear-gradient(90deg, rgb(6, 58, 228), rgb(194, 77, 50));
}
</style>