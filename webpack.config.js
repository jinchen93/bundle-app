var path = require("path");
var webpack = require("webpack");

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

var prodPlugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production"),
    },
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true,
    },
  }),
];

plugins = plugins.concat(
  process.env.NODE_ENV === "production" ? prodPlugins : devPlugins
);

module.exports = {
  context: __dirname,
  entry: "./client/entry.js",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"],
        },
      },
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: "eslint-loader",
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};
