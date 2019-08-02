/* eslint-disable @typescript-eslint/no-var-requires */
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const environment = require('./environment');
const workboxPlugin = require('./plugins/workbox');

// Setup plugins
environment.plugins.append('Workbox', workboxPlugin);

module.exports = environment.toWebpackConfig();
