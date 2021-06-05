const path=require("path");
const webpack = require ("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports=
  {
    entry:"./website/js/index.js",
    output:
      {
        filename:"weather-app-bundle.js",
        // path:"D:/Computer Science/0web-projects/weather-app-webpack-test"
        path:path.resolve(__dirname,"./dist")
      },
    plugins:
      [
        new HtmlWebpackPlugin
          (
            {
              template:"./website/index.html",
              filename:"weather-app-bundle.html"
            }
          )
      ],
    mode:"none",
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    }
  };