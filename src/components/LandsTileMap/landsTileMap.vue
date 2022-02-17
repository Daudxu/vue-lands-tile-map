<template>
  <div class="hg-landsTileMap-wrapper">
    <div> {{toc}}</div>
    <canvas id="titleMapCanvas"
            class="titleMapCanvas"
            ref="titleMapCanvas"
            :width="canvasWidth"
            :height="canvasHeight"></canvas>
  </div>
</template>

<script>
export default {
  name: 'landsTileMap',
  data () {
    return {
      initMapmatrix: '',
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight,
    };
  },
  props: {
    color: {
      type: String,
      default: '#2a8ee3'
    },
    diam: {
      type: Number,
      default: 50
    },
    size: {
      type: Number,
      default: 3
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
.hg-loading-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: #fff;
}

.hg-cssload-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: auto;
  text-align: center;
}

.hg-cssload-speeding-wheel {
  margin: 0 auto;
  border-radius: 50%;
  animation: cssload-spin 575ms infinite linear;
}

@keyframes cssload-spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>