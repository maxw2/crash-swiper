const path = require('path')


module.exports = {
    mode: 'development',
    watch: true,
    entry: {
        CSwiper: './index.js',
        view: './view/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

}