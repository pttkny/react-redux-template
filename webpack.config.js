const path = require("path");

const rootDir = __dirname;
const inputDir = path.resolve(rootDir, "src");
const outputDir = path.resolve(rootDir, "dist");
const publicDir = path.resolve(rootDir, "public");

module.exports = [
  {
    devServer: {
      contentBase: [publicDir, rootDir]
    },
    devtool: "source-map",
    entry: path.resolve(inputDir, "index.tsx"),
    externals: {
      react: "React",
      "react-dom": "ReactDOM"
    },
    mode: "production",
    module: {
      rules: [
        {
          exclude: /node_modules/,
          loader: "ts-loader",
          test: /\.tsx?$/
        },
        {
          enforce: "pre",
          exclude: /node_modules/,
          loader: "eslint-loader",
          test: /\.tsx?$/
        },
        {
          enforce: "pre",
          loader: "source-map-loader",
          test: /\.js$/
        }
      ]
    },
    output: {
      path: outputDir,
      filename: "index.js"
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    }
  }
];
