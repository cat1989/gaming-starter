const path = require('path')

const config = {
    entry: path.resolve(__dirname, './src'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [
            ".ts", ".js"
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                    'eslint-loader'
                ]
            }
        ]
    }
}

module.exports = config