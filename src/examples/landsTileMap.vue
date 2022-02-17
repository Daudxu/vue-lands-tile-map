<template>
  <div class="wrap">
    <h4>lands Tile Map</h4>
    <div>
      <LandsTileMap :tileMapMapmatrix="tileMapMapmatrix"
                    :tiledDigitalColormap="tiledDigitalColormap">
      </LandsTileMap>
    </div>
  </div>
</template>
<script>

import { LandsTileMap } from '@/components';
// import { LandsTileMap } from '../../dist/nft-lands-tile-map-vue-component.min.js';

export default {
  name: 'landsTileMap',
  data () {
    return {
      tileMapMapmatrix: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      tiledDigitalColormap: [
        { 0: '#138535' },
        { 1: '#101566' },
        { 2: '#0070c0' }
      ]
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
