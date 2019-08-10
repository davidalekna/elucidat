const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

module.exports = () => {
  return {
    entry: ['webpack/hot/poll?1000', './src/index.ts'],
    devtool: 'inline-source-map',
    watch: true,
    externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    plugins: [
      new StartServerPlugin('bundle.js'),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
  };
};
