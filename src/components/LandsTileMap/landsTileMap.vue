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
      myCanvas: null,
      ctx: null,
    };
  },
  props: {
    initMapmatrix: {
      type: Array,
      default: () => ([])
    },
    tiledDigitalColormap: {
      type: Array,
      default: () => ([])
    },
    canvasWidth: {
      type: Number,
      default: window.innerWidth,
    },
    canvasHeight: {
      type: Number,
      default: window.innerHeight,
    },
    tileSize: {
      type: Number,
      default: 32,
    },
    tileScale: {
      type: Number,
      default: 1,
    },
    startPaintingX: {
      type: Number,
      default: window.innerWidth / 12,
    },
    startPaintingY: {
      type: Number,
      default: 0,
    },
    gridLineColor: {
      type: String,
      default: '#c8efd4'
    },
    gridTileColor: {
      type: String,
      default: '#ffffff'
    },
  },
  watch: {
    initMapmatrix: {
      deep: true,
      handler (newVal, oldVal) {
        this.initMapmatrix = newVal;
      }
    }
  },
  mounted () {
    this.myCanvas = this.$refs.titleMapCanvas;
    this.ctx = this.myCanvas.getContext('2d');
    this.drawImage(this.initMapmatrix);
    // window.onresize = function () {
    //   _this.resizeCanvas();
    // };
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
      this.ctx.strokeStyle = this.gridLineColor;
      this.ctx.beginPath();
      for (let row = 0; row < map.length; row++) {
        for (let column = 0; column < map[row].length; column++) {
          // this.ctx.fillText(column, this.startPaintingX + (column * (this.tileSize * this.imgScale)), (this.tileSize * this.imgScale));
          // this.ctx.fillText(column, this.startPaintingY + (this.tileSize * this.imgScale), (row * (this.tileSize * this.imgScale)));
          const tileMapVal = map[row][column];
          this.ctx.fillStyle = this.getGridTileColor(tileMapVal);
          var SizeimgX = this.startPaintingX + (column * this.tileSize * this.tileScale);
          var SizeimgY = this.startPaintingY + (row * this.tileSize * this.tileScale);
          this.ctx.fillRect(SizeimgX, SizeimgY, (1 * this.tileSize * this.tileScale), (1 * this.tileSize * this.tileScale));
          this.ctx.rect(SizeimgX, SizeimgY, (1 * this.tileSize * this.tileScale), (1 * this.tileSize * this.tileScale));
          this.ctx.stroke();
        }
      }
    },
    getGridTileColor (tileMapVal) {
      var gridTileColor = this.gridTileColor;
      this.tiledDigitalColormap.forEach((item) => {
        if (typeof (item[tileMapVal]) !== 'undefined' && item[tileMapVal]) {
          gridTileColor = item[tileMapVal];
        }
      });
      return gridTileColor;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss"  scoped>
</style>