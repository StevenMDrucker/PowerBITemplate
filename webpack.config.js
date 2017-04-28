const webpack = require('webpack');
const path = require('path');
const ENTRY = './src/VisualMain.tsx';
const regex = path.normalize(ENTRY).replace(/\\/g, '\\\\').replace(/\./g, '\\.');

module.exports = {
    entry: ENTRY,
    devtool: 'eval',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx']
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: "tslint"
            }
        ],
        loaders: [
            {
                test: new RegExp(regex),
                loader: path.join(__dirname, 'bin', 'pbiPluginLoader'),
            },
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    externals: [
        {
            jquery: "jQuery",
            "lodash": "_"
        },
    ]
};
