if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/vue-lands-tile-map.umd.min.js')
} else {
  module.exports = require('./lib/vue-lands-tile-map.umd.js')
}