const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/",
        filename: "bundle.js"
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
    mode: "production",
    resolve: {extensions: ["*",".js",".jsx"]},
    devServer: {
        contentBase: path.join(__dirname, "build/"),
        port: 3000,
        publicPath: "localhost:3000/dist/",
        hotOnly: true,
        historyApiFallback: true
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
      },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}