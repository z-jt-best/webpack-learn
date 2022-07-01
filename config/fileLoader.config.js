// 学习 file-loader 的 webpack 配置

const htmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')

const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
    entry: './src/main.js',
    module: {
        rules: [
            // webpack 4 之前需要使用 file-loader 来处理静态资源。
            // 需要注意的是，如果在 webpack 5 中使用了 file-loader 后，就不需要使用 assets/resource 来处理静态资源了，因为会导致重复处理
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: './src/loader/file-loader/src/cjs.js'
                    }
                ]
            }

            // // webapck 5内置的Assets Modules, 用于在不额外添加 loader 的情况下，webpack 可以处理静态资源，但是还是需要手动启用这些配置
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     type: 'asset/resource'
            // }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            title: 'webpack-learn'
        })
    ]
})
