const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: {minimze: true}
                }
            },
            {
                test: /\.(png|svg|jpg|gif|JPG)$/,
                use: {
                    loader: "file-loader"
                }
            }
            ,
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            //options similar to the same options in webpackOptions.output
            //both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        })
    ]
}