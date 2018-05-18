const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            path: __dirname + "/dist",
            template: "./index.html",
        })
    ],
    module: {
        rules: [
            { test: /\.js$|\.jsx$/, use: ["babel-loader"], exclude: /node_modules/ },
            { test: /\.css$/, use: ["style-loader", "css-loader",], exclude: /node_modules/ },
            { test: /\.(woff|svg|eot|ttf)$/, loader: ["url-loader"] }
        ]
    },
    devServer: {
        port: 3000,
        open: 'http://localhost:3000',
        contentBase: __dirname,
    },
    devtool: "eval"
}