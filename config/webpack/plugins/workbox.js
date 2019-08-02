/* eslint-disable @typescript-eslint/no-var-requires */
const WorkboxPlugin = require('workbox-webpack-plugin');

const daysToSeconds = days => days * 24 * 60 * 60;

module.exports = new WorkboxPlugin.GenerateSW({
  clientsClaim: true,
  skipWaiting: true,
  swDest: '../service-worker.js',
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|gif|jpg|jpeg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        // eslint-disable-next-line no-undef
        plugins: [
          {
            maxEntries: 60,
            maxAgeSeconds: daysToSeconds(30), // 30 Days
          },
        ],
      },
    },
    {
      urlPattern: /\.(?:js|css|html)$/,
      handler: 'NetworkFirst',
    },
    {
      urlPattern: '/',
      handler: 'NetworkFirst',
    },
  ],
});
