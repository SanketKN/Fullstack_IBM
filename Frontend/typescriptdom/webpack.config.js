const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    // webpack server
    mode: 'development',
    target: 'web',

    entry:{
        main:path.resolve(__dirname, 'src/main.ts')
    },

    module:{
        rules:[
            {
                test:/\.ts?$/,
                use:'ts-loader', 
                exclude: /node_modules/
            }
        ]
    },

    resolve:{
        extensions:['.ts','.js']
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename: 'bundle.js',
        // libraryTarget: 'commonjs-module',
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            title:'Phone Price',
            inject:'body'
        })
    ],
    // webpack-dev-server
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
}
