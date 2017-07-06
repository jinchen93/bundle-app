var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.dev.config");

var app = express();
var compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
      colors: true,
    },
    headers: { "Access-Control-Allow-Origin": "*" },
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.listen(4000, "0.0.0.0", function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://0.0.0.0:4000");
});
