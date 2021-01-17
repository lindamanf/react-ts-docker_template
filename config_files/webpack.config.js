const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../public"),
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(t|j)sx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: { allowTsInNodeModules: true },
        }],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag'
            },
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
              importLoaders: 2,
              modules: {
                localIdentName: '[name]__[local]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          },
          {
            loader: "sass-loader"
          }
        ],
      },
      {
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        loader: "url-loader",
        options: {
          limit: 15360,
          fallback: 'file-loader',
          outputPath: 'img/',
          publicPath: '../img/',
          emitFile: true,
          name: '[name].[ext]',
        },
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    contentBase: "./dist",
    port: 8080,
    host: "0.0.0.0",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: './original' }],
    }),
  ],
}
