require('dotenv').config()
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')


module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.html$/i,
                use: 'html-loader',
                include: [path.resolve(__dirname, 'src')]
            },

        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: process.env.WEBPACK_MODE,
    devServer: {
        port: 8080,
        server: 'https',
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}