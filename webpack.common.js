const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js'
    },
    module: {
        rules: [{
            test: /\.(css|less)$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.js$/,
            // use: 'babel-loader',
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                plugins: [
                    ['import', {'libraryName': 'antd', 'libraryDirectory': 'es', 'style': 'css'}]
                ]
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
};
