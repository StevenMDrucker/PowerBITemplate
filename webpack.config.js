const webpack = require('webpack');
const path = require('path');
const ENTRY = './src/VisualMain.ts';
const regex = path.normalize(ENTRY).replace(/\\/g, '\\\\').replace(/\./g, '\\.');

module.exports = {
    entry: ENTRY,
    devtool: 'eval',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts']
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
        ]
    },
    externals: [
        {
            jquery: "jQuery",
            "lodash": "_"
        },
    ]
};
