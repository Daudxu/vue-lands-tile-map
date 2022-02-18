<p align="center">
# NFT Lands Tile Map Vue Component
</p>

vue-components

[![npm][npm]][npm-url]
[![node][node]][node-url]

## Installation

```
npm install nft-lands-tile-map-vue-component
```

## Import

```
import 'nft-lands-tile-map-vue-component/dist/nft-lands-tile-map-vue-component.min.css';
import { LandsTileMap } from 'nft-lands-tile-map-vue-component';
```

## Usage

```
<template>
  <div class="wrap">
    <h4>lands Tile Map </h4>
    <div style="text-align: center;margin-bottom: 10px;">
      <h5> <span> Current coordinates {{x}},{{y}}</span> <span> <button @click="handleClickFilter"> 模拟筛选</button></span> </h5>
    </div>
    <div>
      <LandsTileMap ref="landsTileMapRef"
                    :tileMapMapmatrix="tileMapMapmatrix"
                    :tiledDigitalColormap="tiledDigitalColormap"
                    :tileSize="tileSize"
                    @handleClickTile="handleClickTile">
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      tileMapMapmatrixBigSizeBlock: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ],
      tiledDigitalColormap: [
        { 0: '#138535' },
        { 1: '#101566' },
        { 2: '#0070c0' }
      ],
      tileSize: 30,
      x: 0,
      y: 0,
      flag: true
    };
  },
  components: {
    LandsTileMap
  },
  methods: {
    handleClickTile (e) {
      if (typeof (this.tileMapMapmatrix[e.clickY][e.clickX]) !== 'undefined') {
        this.x = e.x;
        this.y = e.y;
      } else {
        this.x = '';
        this.y = '';
      }
    },
    handleClickFilter () {
      var tileMap = this.tileMapMapmatrix;
      var flag = this.flag;
      if (flag) {
        tileMap = this.$refs.landsTileMapRef.blockCoverage(tileMap, this.tileMapMapmatrixBigSizeBlock);
        flag = false;
      } else {
        flag = true;
      }
      this.flag = flag;
      this.$refs.landsTileMapRef.handleClickAssignRender(tileMap);
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  h4 {
    text-align: center;
    padding: 20px 0;
  }
}
</style>

```

具体使用可参考[该文件](../../examples/landsTileMap.vue)。

## Options

| 配置项                  | 值类型   | 描述                                                                          |
| ----------------------- | -------- | ----------------------------------------------------------------------------- |
| tileMapMapmatrix        | Array    | lands tile Map Mapmatrix                                                      |
| tiledDigitalColormap    | Array    | Colors corresponding to digital tile maps                                     |
| canvasWidth             | Number   | canvas width，default `window.innerWidth`                                     |
| canvasHeight            | Number   | canvas height，default `window.innerHeight`                                   |
| tileSize                | Number   | tile map Size，default 32                                                     |
| tileScale               | Number   | tile map Scale，default 1                                                     |
| startPaintingX          | Number   | The horizontal coordinate of the starting point of the drawing，default 0     |
| startPaintingY          | Number   | The ordinate of the starting point of the drawing，default 0                  |
| gridLineColor           | String   | grid Line Color，default '#c8efd4'                                            |
| gridDefaultTileColor    | String   | grid Default Tile Color，default '#ffffff'                                    |
| handleClickTile         | function | Click to return to coordinates Returns the coordinates and click event object |
| handleClickAssignRender | function | render canvas view                                                            |
| blockCoverage           | function | Merge large block matrices                                                    |

## Changelog

### 2022.02.17

> v0.0.1 \* Matrix, color block, drag

[npm]: https://img.shields.io/npm/v/postcss-load-config.svg
[npm-url]: https://npmjs.com/package/postcss-load-config
[node]: https://img.shields.io/node/v/postcss-load-plugins.svg
[node-url]: https://nodejs.org/
