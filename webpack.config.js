const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    toDoClass: "./src/toDoClass.js",
    startPage: "./src/startPage.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "TODOer",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|ptf|ttf|eot|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
