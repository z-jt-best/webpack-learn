const path = require('path')

const baseConfig = {
    mode: 'development',
    output: {
        clean: true,
        filename: '[name].js'
    },
    resolve: {
        alias: {
            '@': path.resolve(process.cwd(), 'src')
        }
    },
    module: {
        rules: []
    },
    plugins: []
}

module.exports = baseConfig
