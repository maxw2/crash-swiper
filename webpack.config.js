const path = require('path')


module.exports = {
    watch: true,
    entry: {
        CSwiper: './src/swiper.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

}