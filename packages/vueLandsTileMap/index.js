// 导入组件，组件必须声明 name
import VueLandsTileMap from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
VueLandsTileMap.install = function (Vue) {
  Vue.component(VueLandsTileMap.name, VueLandsTileMap)
}

export default VueLandsTileMap
