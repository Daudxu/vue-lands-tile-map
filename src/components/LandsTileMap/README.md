## Introduce

NFT Lands tile map

tag: opensea ERC-721 ERC-1155

## Usage

```
<template>
  <div>
    <loading></loading>
  </div>
</template>
<script>
import { LandsTileMap } from 'nft-lands-tile-map-vue-component';
export default {
  ...
  components: {
    Loading
  }
  ...
};
</script>
```

具体使用可参考[该文件](../../examples/landsTileMap.vue)。

## Options

| 配置项 | 值类型 | 描述                     |
| ------ | ------ | ------------------------ |
| tileMapMapmatrix   | Array |   lands tile Map Mapmatrix   |
| tiledDigitalColormap   | Array | Colors corresponding to digital tile maps   |
| canvasWidth   | Number | canvas width，default `window.innerWidth` |
| canvasHeight   | Number | canvas height，default `window.innerHeight` |
| tileSize   | Number | tile map Size，default 32 |
| tileScale   | Number | tile map Scale，default 1 |
| startPaintingX   | Number | The horizontal coordinate of the starting point of the drawing，default 0 |
| startPaintingY   | Number | The ordinate of the starting point of the drawing，default 0 |
| gridLineColor   | String | grid Line Color，default '#c8efd4' |
| gridDefaultTileColor   | String | grid Default Tile Color，default '#ffffff' |