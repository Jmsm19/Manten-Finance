/* eslint-disable @typescript-eslint/no-var-requires */
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = new WorkboxPlugin.GenerateSW({
  clientsClaim: true,
  skipWaiting: true,
});
