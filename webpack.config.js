const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (_env, argv) => {
  const prod = argv.mode === "production";
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: prod ? "assets/[name].[contenthash:8].js" : "assets/[name].js",
      chunkFilename: prod ? "assets/[name].[contenthash:8].js" : "assets/[name].js",
      publicPath: "/",
      clean: true,
    },
    devtool: prod ? false : "source-map",
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: { "@": path.resolve(__dirname, "src") },
    },
    module: {
      rules: [
        { test: /\.tsx?$/, exclude: /node_modules/, use: { loader: "ts-loader", options: { transpileOnly: true } } },
        { test: /\.css$/, use: [prod ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "postcss-loader"] },
        { test: /\.(png|jpe?g|webp|svg|gif)$/i, type: "asset", parser: { dataUrlCondition: { maxSize: 8 * 1024 } }, generator: { filename: "assets/img/[name].[hash:8][ext]" } },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./public/index.html", favicon: "./public/favicon.svg", minify: prod }),
      new MiniCssExtractPlugin({ filename: "assets/[name].[contenthash:8].css" }),
      new CopyPlugin({ patterns: [{ from: "public", to: ".", globOptions: { ignore: ["**/index.html"] } }] }),
    ],
    optimization: {
      minimizer: ["...", new CssMinimizerPlugin()],
      splitChunks: { chunks: "all" },
    },
    performance: { hints: false },
    devServer: { historyApiFallback: true, hot: true, port: 3000 },
  };
};
