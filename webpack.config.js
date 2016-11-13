var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        app: './js/app.js',
        vendor: ['angular', 'todomvc-common', 'angular-route', 'angular-resource']
    },
    output: {
        path: __dirname + '/generated/js',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    loaders: [
        {
            // HTML LOADER
            // Reference: https://github.com/webpack/raw-loader
            // Allow loading html through js
            test: /\.html$/,
            loader: 'raw'
        }
    ]
};