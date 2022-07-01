// 多页面的 webpack 配置
const path = require('path')
const { merge } = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
    entry: {
        news: './src/pages/news/index.js',
        search: './src/pages/search/index.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            title: 'News Page',
            chunks: ['news'],
            filename: 'news.html'
        }),
        new htmlWebpackPlugin({
            template: './public/index.html',
            title: 'Search Page',
            chunks: ['search'],
            filename: 'search.html'
        })
    ]
})
