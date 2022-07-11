const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'development';
const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: "node",
    mode: NODE_ENV,
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    module: {
        rules: [{
            test: /.[tj]sx?$/,
            use: ['ts-loader'],
        }]
    },
    externals: [nodeExternals()],
    optimization: {
        minimize: false,
    }
}
