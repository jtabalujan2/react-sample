const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
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
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    performance: {
        hints: process.env.NODE_ENV === 'production' ? "warning" : false
      },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}