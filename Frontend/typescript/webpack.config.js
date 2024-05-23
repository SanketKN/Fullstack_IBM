// import path from 'path'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode:'development',
    target:'web',
    entry:{
        main:path.resolve(__dirname, "src/main.ts")
    },
    module:{
        rules:[
            {            
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve:{
        extensions: ['.ts', '.js']
    },
    output:{
        path:path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'My Webpage',
            inject: 'body'
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
}
