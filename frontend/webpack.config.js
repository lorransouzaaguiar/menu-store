import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as url from 'url'

const PORT = 3030
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

export default {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
        port: PORT,
        hot: true,
        watchContentBase: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@App': path.resolve(__dirname, 'src/app'),
            '@Cart': path.resolve(__dirname, 'src/cart'),
            '@Menu': path.resolve(__dirname, 'src/menu'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'src/app/assets/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',

                    options: {
                        babelrc: false,
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', { runtime: 'automatic' }],
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '/public/index.html'),
            filename: 'index.html',
        }),
    ],
}
