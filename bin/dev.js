const webpack = require('webpack');
const webPackConfig = require('../webpack.config');
const nodemon = require('nodemon');
const path = require('path');

const compiler = webpack(webPackConfig);

compiler.run((err) => {
    if (err) {
        console.error("Compilation error:", err);
        return;
    }
    compiler.watch({}, (err) => {
        if (err) {
            console.error("Compilation error:", err);
            return;
        }
        console.log("Compilation success");
    });

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [path.resolve(__dirname, '../dist/server'),
                path.resolve(__dirname, '../dist/client')],
    })
})
