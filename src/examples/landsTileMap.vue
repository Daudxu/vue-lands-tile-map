<template>
  <div class="wrap">
    <h4>lands Tile Map</h4>
    <div>
      <LandsTileMap>
      </LandsTileMap>
    </div>
  </div>
</template>
<script>

import { LandsTileMap } from '@/components';
// import { Loading } from '../../dist/nft-lands-tile-map-vue-component.min.js';

export default {
  name: 'landsTileMap',
  data () {
    return {
      data: {}
    };
  },
  components: {
    LandsTileMap
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  h4 {
    text-align: center;
    padding: 20px 0;
  }
  & > div {
    position: relative;
    height: 600px;
  }
}
</style>
