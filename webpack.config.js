const path = require("path");
module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  devServer: {
    port: "9500",
    open: true,
    publicPath: "/",
    contentBase: "./public",
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
