<template>
<v-footer app dark id="footer" class="animated slideInLeft">
    <v-btn flat v-for="item in items" :key="item.name" 
      left
      :href="item.link" target="_blank" rel="noopener noreferrer"
      :title="item.name">
      <v-icon v-if="item.icon_origin === 'mdi'" class="mr-1">{{ item.icon }}</v-icon>
      <i v-else-if="is_fa(item.icon_origin)" class="mr-1" :class="get_fa_class(item.icon_origin, item.icon)"></i>
      <img v-else-if="item.icon_origin === 'assets'" class="mr-1" 
      :src="require('../assets/' + item.icon)" :alt="item.name" />
      {{item.name}}
      </v-btn>
</v-footer>
</template>

<script>
import footerData from '../data/footer.json'
export default {
  name: 'TheFooter',
  data() {
    return {
      items: footerData.items
    }
  },
    methods: {
        get_fa_class(fa_type, fa_icon) {
            return fa_type + ' fa-' + fa_icon
        },
        is_fa(icon_origin) {
            return icon_origin === 'fas' || icon_origin === 'fab'
        }
    }
}
</script>

<style lang="scss" scoped>
#footer {
  background-image: linear-gradient( 135deg,rgb(0, 62, 207) 10%, rgb(0, 106, 206) 100%);
}
</style>
