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
  props: {
    tileMapMapmatrix: {
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
      default: 0,
    },
    startPaintingY: {
      type: Number,
      default: 0,
    },
    gridLineColor: {
      type: String,
      default: '#c8efd4'
    },
    gridDefaultTileColor: {
      type: String,
      default: '#ffffff'
    },
  },
  data () {
    return {
      myCanvas: null,
      ctx: null,
      map: this.tileMapMapmatrix,
      paintingX: this.startPaintingX,
      paintingY: this.startPaintingY,
      scale: this.tileScale
    };
  },
  // watch: {
  //   tileMapMapmatrix: {
  //     deep: true,
  //     handler (newVal, oldVal) {
  //       this.tileMapMapmatrix = newVal;
  //     }
  //   }
  // },
  mounted () {
    this.myCanvas = this.$refs.titleMapCanvas;
    this.ctx = this.myCanvas.getContext('2d');
    this.drawImage(this.tileMapMapmatrix);
    this.canvasEventsInit();
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
      this.drawImage(this.tileMapMapmatrix);
    },
    async drawImage (map) {
      var _this = this;
      _this.ctx.clearRect(0, 0, _this.myCanvas.width, _this.myCanvas.height);
      this.ctx.lineWidth = 1;
      this.ctx.strokeStyle = this.gridLineColor;
      this.ctx.beginPath();
      for (let row = 0; row < map.length; row++) {
        for (let column = 0; column < map[row].length; column++) {
          const tileMapVal = map[row][column];
          this.ctx.fillStyle = this.getGridTileColor(tileMapVal);
          var SizeimgX = this.paintingX + (column * this.tileSize * this.scale);
          var SizeimgY = this.paintingY + (row * this.tileSize * this.scale);
          this.ctx.fillRect(SizeimgX, SizeimgY, (1 * this.tileSize * this.scale), (1 * this.tileSize * this.scale));
          this.ctx.rect(SizeimgX, SizeimgY, (1 * this.tileSize * this.scale), (1 * this.tileSize * this.scale));
          this.ctx.stroke();
        }
      }
    },
    canvasEventsInit () {
      var _this = this;
      var canvas = _this.myCanvas;
      canvas.onmousedown = function (event) {
        var imgx = _this.paintingX;
        var imgy = _this.paintingY;

        var pos = { x: event.clientX, y: event.clientY };
        canvas.onmousemove = function (evt) {
          canvas.style.cursor = 'move';
          var x = (evt.clientX - pos.x) * 2 + imgx;
          var y = (evt.clientY - pos.y) * 2 + imgy;
          _this.paintingX = x;
          _this.paintingY = y;
          _this.drawImage(_this.map);
        };
        canvas.onmouseup = function () {
          canvas.onmousemove = null;
          canvas.onmouseup = null;
          canvas.style.cursor = 'default';
        };
      };
      canvas.onmousewheel = canvas.onwheel = function (event) {
        var wheelDelta = event.wheelDelta ? event.wheelDelta : (event.deltaY * (-40));
        if (wheelDelta > 0) {
          if (_this.scale <= 1.1) {
            _this.scale += 0.1;
          }
        } else {
          if (_this.scale >= 0.9) {
            _this.scale -= 0.1;
          }
        }
        _this.drawImage(_this.map);
        event.preventDefault && event.preventDefault();
        return false;
      };
    },
    getGridTileColor (tileMapVal) {
      var gridTileColor = this.gridDefaultTileColor;
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
.hg-landsTileMap-wrapper{
  border: none;
}
</style>