'use strict'

const {join} = require('path')

const paths = {
    root: join(__dirname, '..'),
    src: join(__dirname, '..', 'src'),
    dist: join(__dirname, '..', 'dist')
}

module.exports = {
    paths,

    entry: join(paths.src, 'index'),

    output: {
        path: paths.dist,
        filename: '[name]-[chunkhash].js'
    },

    htmlPluginConfig: {
        title: 'Cepv',
        template: join(paths.src, 'html', 'template.html')
    },

    jsLoader: {
        test: /\.js$/,
        exclude: /node_modules/,
        include: paths.src,
        use: 'babel-loader'
    },

    cssLoader: {
        test: /\.css|.styl$/,
        exclude: /node_modules/,
        include: paths.src,
        use: [
            'style-loader',
            'css-loader?modules',
            'stylus-loader']
    },

    fileLoader: {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
        include: paths.src,
        use: {
            loader: 'file-loader',
            query: {
                name: 'media/[name].[hash:8].[ext]'
            }
        }
    },

    urlLoader: {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        include: paths.src,
        use: {
            loader: 'url-loader',
            query: {
                limit: 10000,
                name: 'media/[name].[hash:8].[ext]'
            }
        }
    },

    resolve: {
        alias: {
            src: paths.src,
            components: join(paths.src, 'components'),
            request: join(paths.src, 'request'),
            images: join(paths.src, 'images'),
            pages: join(paths.src, 'pages'),
            utils: join(paths.src, 'utils')
        }
    }
}
