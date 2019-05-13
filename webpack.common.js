const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const glob = require('glob')

const paths = glob.sync('src/pages/**/*.js')
const entries = paths.reduce((previousValue, currentValue) =>  {
    const parsedPath = path.parse(currentValue)
    const dir = parsedPath.dir.split('/').slice(-1)[0]
    previousValue[dir] = './' + currentValue
    return previousValue
}, {index: './src/index.js'})
const plugins = paths.map(value => {
    const parsedPath = path.parse(value)
    const dir = parsedPath.dir.split('/').slice(-1)[0]
    return new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: dir + '/' + parsedPath.name + '.html',
        chunks: [dir]
    })
})

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: path.join('js', '[name].bundle.js')
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
        new HtmlWebpackPlugin({ // 主
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        new CleanWebpackPlugin()
    ].concat(plugins) // 其他页面
}
