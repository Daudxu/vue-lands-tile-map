import Vue from 'vue'
import App from './App.vue'
import VueLandsTileMap from '../packages/index'
// import VueModelViewer from '../index.js'
// import VueModelViewer from '../lib/vue-model-viewer.umd.js'
// import VueLandsTileMap from 'vue-model-viewer'
Vue.config.productionTip = false
Vue.use(VueLandsTileMap);
new Vue({
  render: h => h(App),
}).$mount('#app')
