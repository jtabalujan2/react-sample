const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/App.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, "build/"),
        filename: "bundled.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ] 
    },
    resolve: {extensions: ["*",".js",".jsx"]},
    devServer: {
        contentBase: path.join(__dirname, "build/"),
        port: 3000,
        hotOnly: true,
        publicPath: "http://localhost:3000/",
        historyApiFallback: true
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
      },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}