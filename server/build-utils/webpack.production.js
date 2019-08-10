const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = () => {
  return {
    entry: './src/index.ts',
    externals: [nodeExternals()],
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
      new webpack.NamedModulesPlugin(),
      new webpack.HashedModuleIdsPlugin({
        hashFunction: 'sha256',
        hashDigest: 'hex',
        hashDigestLength: 20,
      }),
    ],
  };
};
