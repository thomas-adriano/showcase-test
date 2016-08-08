var path = require("path");
var webpack = require("webpack");

var prod = process.env.npm_lifecycle_event === 'dist';
var dev = process.env.npm_lifecycle_event === 'build' || process.env.npm_lifecycle_event === 'test' ||
    process.env.npm_lifecycle_event === 'live';


var commonsPlugins = [
    new webpack.ProvidePlugin({
        $: "jquery"
    }),
    new webpack.DefinePlugin({
        EVENT_SERVER_URL: '"http://pcbnu008603:7071/events.json"',
        PREDICTION_SERVER_URL: '"http://pcbnu008603:8001/queries.json"'
    })
];

var prodPlugins = [
    new webpack.optimize.DedupePlugin(), //garante que nao existam copias de um mesmo modulo.
    new webpack.optimize.OccurrenceOrderPlugin(), //faz com que modulos mais utilizados recebam os menores ids. Segundo documentacao isso resulta em mais performance (runtime) e menor tamanho de arquivo dist
    new webpack.optimize.UglifyJsPlugin(), //minifier e uglyfier
];

var plugins = commonsPlugins.concat(prodPlugins);

var preLoaders = [{
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['jshint-loader']
}];

var loaders = [{
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['babel'],
}];

module.exports = {
    context: __dirname,
    entry: "./app/showcase.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "showcase.js"
    },
    module: {
        preLoaders: preLoaders,
        loaders: loaders
    },
    plugins: plugins,
};
