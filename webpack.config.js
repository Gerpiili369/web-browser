const
    path = require('path'),
    webpack = require('webpack'),
    SRC_DIR = path.join(__dirname, 'renderer', 'src'),
    DIST_DIR = path.join(__dirname, 'renderer', 'dist'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CSPWebpackPlugin = require('csp-webpack-plugin');

module.exports = {
    entry: `${ SRC_DIR }/app.jsx`,
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    module: {
        rules: [
            {
                test: /\.scss$/u,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.png$/u,
                loader: 'url-loader?limit=100000&minetype=image/png'
            },
            {
                test: /\.jpg/u,
                loader: 'file-loader'
            },
            {
                test: /\.(?<js>js|jsx)$/u,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/react', '@babel/env']
                }
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
            title: 'Web browser',
            template: `${ SRC_DIR }/index.ejs`,
        }),
        new CSPWebpackPlugin({
            'script-src': [
                '\'self\'',
                '\'unsafe-eval\''
            ],
        }),
    ]
};
