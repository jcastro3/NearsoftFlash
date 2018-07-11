const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["env", "react"]
        }
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html", hash: true })]
};
