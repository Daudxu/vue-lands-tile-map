<template>
  <div class="hg-landsTileMap-wrapper">
    <!-- canvas start -->
    <canvas id="titleMapCanvas"
            class="titleMapCanvas"
            ref="titleMapCanvas"
            :width="canvasWidth"
            :height="canvasHeight">
    </canvas>
    <!-- canvas end -->
  </div>
</template>

<script>
export default {
  name: 'landsTileMap',
  data () {
    return {
      initMapmatrix:
        [
          [37, 37, 37, 37, 37, 37, 37, 37],
          [37, 37, 37, 37, 37, 37, 37, 37],
          [37, 37, 37, 37, 37, 37, 37, 37],
          [37, 37, 37, 37, 37, 37, 37, 37],
          [37, 37, 37, 37, 37, 37, 37, 37],
          [37, 37, 37, 37, 37, 37, 37, 37],
          [37, 37, 37, 37, 37, 37, 37, 37],
        ],
      myCanvas: null,
      ctx: null,
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight,
      tileSize: 16,
      imgScale: 1,
      imgX: window.innerWidth / 12,
      imgY: 0,
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
  },
  mounted () {
    this.myCanvas = this.$refs.titleMapCanvas;
    this.ctx = this.myCanvas.getContext('2d');
    var _this = this;
    setTimeout(() => {
      _this.drawImage(this.initMapmatrix);
    }, 1000);
  },
  methods: {
    resizeCanvas () {
      let browserWidth = window.innerWidth;
      let browserHeight = window.innerHeight;
      this.canvasWidth = browserWidth;
      this.canvasHeight = browserHeight;
      this.drawImage(this.initMapmatrix);
    },
    async drawImage (map) {
      var _this = this;
      _this.ctx.clearRect(0, 0, _this.myCanvas.width, _this.myCanvas.height);
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = '#a0a0a0';
      this.ctx.beginPath();
      for (let row = 0; row < map.length; row++) {
        for (let column = 0; column < map[row].length; column++) {
          // this.ctx.fillText(column, this.imgX + (column * (this.tileSize * this.imgScale)), (this.tileSize * this.imgScale));
          // this.ctx.fillText(column, this.imgX + (this.tileSize * this.imgScale), (row * (this.tileSize * this.imgScale)));
          var SizeimgX = this.imgX + (column * this.tileSize * this.imgScale);
          var SizeimgY = this.imgY + (row * this.tileSize * this.imgScale);
          this.ctx.fillStyle = '#5e389a66';
          this.ctx.fillRect(SizeimgX, SizeimgY, (1 * this.tileSize * this.imgScale), (1 * this.tileSize * this.imgScale));
          this.ctx.rect(SizeimgX, SizeimgY, (1 * this.tileSize * this.imgScale), (1 * this.tileSize * this.imgScale));
          this.ctx.stroke();
        }
      }
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