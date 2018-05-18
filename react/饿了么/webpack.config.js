const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
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
            { test: /\.(woff|svg|eot|ttf)$/, loader: ["url-loader"] }
        ]
    },
    devServer: {
        open: "http://localhost:3000",
        port: 3000,
        contentBase: __dirname,
        inline: true,
        proxy: {
            "/api": {
                target: "/api/data",
                onProxyReq: function (proxyReq, req, res) {
                    var data = {
                        nam: "李萧",
                        age: 18
                    }
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    if (req.method == "GET") {
                        res.end(JSON.stringify(data))
                    }
                }
            }
        }
    },
    devtool: "eval"
}