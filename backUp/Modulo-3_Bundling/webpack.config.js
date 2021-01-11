const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    resolve: {
            extensions: [".js",".ts", ".tsx"]
        },
    entry: {
            app: './src/index.tsx',
            appStyles: ['./src/style.scss'],
        },
    devServer: {
            stats: "errors-only",
        },
    output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(process.cwd(), 'dist'),
        },
    module: {
    rules: [
        {
            test: /\.tsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.(png|jpg)$/,
            type: 'asset/resource',
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                {
                loader: "sass-loader",
                options: {
                    implementation: require("sass")
                }
                },
            ]
        },
        {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
            ]
        },
    ],
    },
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./dist/
            template: 'index.html', //Name of template in ./src
            }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
            }),
        ],
};