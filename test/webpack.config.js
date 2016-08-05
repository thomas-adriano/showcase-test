var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');
var distFolder = path.resolve(__dirname, 'dist');

var plugins = [
    new HtmlWebpackPlugin({ //adiciona a tag script referente a todos os entries definidos no webpack.config no template definido
        template: 'assets/html/index-template.html',
        hash: true,
        filename: './index.html'
    }),
    new CleanWebpackPlugin([distFolder]), //deleta a pasta distFolder antes de dar build (problema: no watch mode deleta sรณ na inicializacao, nao em cada regeracao dos arquivos :()
    new webpack.DefinePlugin({
        BACKEND_URL: '"http://pcbnu008603:8084/"'
    })
];

var preLoaders = [{
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['jshint-loader']
}];

var loaders = [{
    test: /\.html$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['html']
}, {
    test: /\.(jpe?g|png|gif|svg)$/i,
    loaders: [
        'url?limit=10000&hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
    ]
}, {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loaders: ['babel'],
}, {
    test: /\.scss$/,
    loaders: ["style", "css", "postcss-loader", "sass"]
}, {
    test: /\.css$/,
    loaders: ["style", "css"]
}, {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "url-loader?limit=10000&mimetype=application/font-woff"
}, {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: "file-loader"
}, {
    test: /\.json$/,
    loader: "json"
}];

module.exports = {
    context: __dirname,
    entry: "./app/app.module.js",
    output: {
        path: distFolder,
        filename: "showcase_test.[hash].js"
    },
    resolve: {
        root: [
            path.resolve(__dirname, 'app'), //adiciona o conteudo deste diretorio (e filhos) como origem de modulos npm
            path.resolve(__dirname, 'assets'),
        ],
        modulesDirectories: [
            '../node_modules', //necessario pois este projeto de testes usa as dependencias informadas no projeto principal
        ]
    },
    module: {
        preLoaders: preLoaders,
        loaders: loaders
    },
    postcss: function() {
        return [autoprefixer];
    },
    plugins: plugins,
};