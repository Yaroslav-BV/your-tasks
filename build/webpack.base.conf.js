const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// список путей
const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

module.exports = {
    // для привязки константы к другим файлам config
    externals: {
        paths: PATHS
    },
    // точка входа
    entry: {
        app: PATHS.src
    },
    // точка выхода
    output: {
        filename: `${PATHS.assets}js/[name].js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    // модули
    module: {
        // правила
        rules: [
            // для Babel 7
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            // для картинок
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: `${PATHS.assets}/img`,
                    publicPath:  '../img'
                }
            },
            // для шрифтов
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: `${PATHS.assets}/fonts`,
                    publicPath:  '../fonts'
                }
            },
            // для SCSS
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {   // postcss-loader
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            },
            //для CSS
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },
                    {   // postcss-loader
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: `${PATHS.src}/js/postcss.config.js` } }
                    }
                ]
            }
        ]
    },
    // используемые плагины
    plugins: [
        new MiniCSSExtractPlugin ({
            filename: `${PATHS.assets}css/[name].css`
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `${PATHS.src}/index.html`,
            filename: './index.html',
            inject: false
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/img`, to: `${PATHS.assets}/img` },
            { from: `${PATHS.src}/static`, to: '' },
        ])
    ]
}