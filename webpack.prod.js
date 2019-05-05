const merge = require('webpack-merge');
const common = require('./webpack.common.js');

console.log(__dirname);
module.exports = merge(common, {
    mode: 'production'
});
