/* eslint-disable @typescript-eslint/no-var-requires */
const { environment } = require('@rails/webpacker');
const typescript = require('./loaders/typescript');

environment.loaders.prepend('typescript', typescript);
module.exports = environment;
