const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: '/',
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketingPlugin',
      filename: 'remoteEntry.js',
      exposes: { './MarketingApp': './src/bootstrap' },
      shared: packageJson.dependencies,
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
