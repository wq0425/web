const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            path: __dirname + "/dist",
            filename: "index.html",
            template: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            { test: /\.js$|\.jsx$/, use: "babel-loader", exclude: /node_modules/ },
            { test: /\.css$/, use: ["style-loader", "css-loader"], exclude: /node_modules/ },
            { test: /\.(png|jpg|gif)$/, use: "url-loader" }
        ]
    },
    devServer: {
        contentBase: __dirname,
        open: "http://localhost:3000",
        port: 3000,
        inline: true
    },
    devtool: "eval"
}