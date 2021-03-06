var path = require("path");
module.exports = [
  {
    entry: {
      main: "./src/index.js"
    },
    output: {
      filename: "./bundle-[name].js",
      path: path.resolve(__dirname, "./public/javascripts/"),
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
    mode: "development",
  },
];
