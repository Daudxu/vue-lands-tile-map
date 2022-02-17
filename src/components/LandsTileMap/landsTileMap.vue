<template>
  <div class="hg-landsTileMap-wrapper">
    <!-- canvas start -->
    <canvas id="titleMapCanvas"
            class="titleMapCanvas"
            ref="titleMapCanvas"
            :width="canvasW"
            :height="canvasH"
            :style="{'background':canvasBgColor}"
            >
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
    canvasBgColor: {
      type: String,
      default: '#acb8e9'
    },
  },
  data () {
    return {
      myCanvas: null,
      ctx: null,
      map: this.tileMapMapmatrix,
      paintingX: this.startPaintingX,
      paintingY: this.startPaintingY,
      size: this.tileSize,
      scale: this.tileScale,
      canvasW: this.canvasWidth,
      canvasH: this.canvasHeight,
      model: {}
    };
  },
  watch: {
    // tileMapMapmatrix: {
    //   deep: true,
    //   handler (newVal, oldVal) {
    //     this.tileMapMapmatrix = newVal;
    //   }
    // }
  },
  mounted () {
    this.myCanvas = this.$refs.titleMapCanvas;
    this.ctx = this.myCanvas.getContext('2d');
    this.drawImage(this.tileMapMapmatrix);
    this.canvasEventsInit();
    var _this = this
    window.onresize = function () {
      let browserWidth = window.innerWidth;
      let browserHeight = window.innerHeight;
      _this.resizeCanvas(browserWidth,browserHeight);
    };
  },
  methods: {
    resizeCanvas (w,h) {
      var _this = this
      this.canvasW = w;
      this.canvasH = h;
      var imgData = this.ctx.getImageData(0,0,this.myCanvas.width,this.myCanvas.height);
      this.myCanvas.width = this.canvasW;
      this.myCanvas.height = this.canvasH;
      setTimeout(()=>{
          _this.ctx.putImageData(imgData,0,0)
      }, 0)
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
          if(typeof(this.model.SizeimgX) !== 'undefined'){
            if(_this.model.SizeimgX === column && _this.model.SizeimgY === row){
                  this.ctx.fillStyle = "#3704ff";
            }
          }
          var SizeimgX = this.paintingX + (column * this.tileSize * this.scale);
          var SizeimgY = this.paintingY + (row * this.tileSize * this.scale);
          this.ctx.fillRect(SizeimgX, SizeimgY, (1 * this.tileSize * this.scale), (1 * this.tileSize * this.scale));
          this.ctx.rect(SizeimgX, SizeimgY, (1 * this.tileSize * this.scale), (1 * this.tileSize * this.scale));
          this.ctx.stroke();
        }
      }
       var nc = document.createElement("canvas");
       this.ctx.drawImage(nc,0,0);
      this.myCanvas.addEventListener('click', this.handleClickTile);
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
          if(this.clickHistory){
             this.ctx.fillStyle = "#3704ff";
             this.ctx.fillRect(SizeimgX, SizeimgY, (1 * this.size * this.scale), (1 * this.size * this.scale));
           }
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
     
 
        // event.preventDefault && event.preventDefault();
        return false;
      };
    },
    handleClickTile(event){
        let clickX = Math.floor((event.offsetX - this.paintingX) / (this.size * this.scale))
        let clickY = Math.floor((event.offsetY - this.paintingY) / (this.size * this.scale))
       	this.$set(this.model,'SizeimgX', clickX)
       	this.$set(this.model,'SizeimgY', clickY)
        this.drawImage(this.map);
        this.$emit('handleClickTile',{
          clickX:clickX,
          clickY:clickY,
          event:event,
        });


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