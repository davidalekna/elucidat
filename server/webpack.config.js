const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const loadPresets = require('./build-utils/loadPresets');

module.exports = ({ mode = 'development', presets = [] } = {}) => {
  return webpackMerge(
    {
      mode,
      target: 'node',
      node: {
        __filename: true,
        __dirname: true,
      },
      output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        devtoolModuleFilenameTemplate: '[absolute-resource-path]',
      },
      resolve: {
        extensions: ['.ts', '.js'],
      },
      plugins: [new CleanWebpackPlugin()],
    },
    modeConfig(mode),
    loadPresets({ mode, presets }),
  );
};
