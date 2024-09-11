// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',

    mode: 'development',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Nueva propiedad
        },
        compress: true,
        port: 9000,
        open: true
    }
};
