const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const devServer = {
    historyApiFallback: true,
    compress          : false,
    port              : 8080,
    open              : true
};

const typescriptRule = { 
    test   : /\.(ts|tsx)$/,
    loader : "ts-loader",
    options: { onlyCompileBundledFiles: true }
};

const resolve = {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()]
}

const htmlPLugin = new HtmlWebpackPlugin({
    template : 'config/index.html',
});

const pwaPlugin = new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
  });

/* ----- EXPORTS -------------------------- */

module.exports = {
    entry    : './index.tsx',
    mode     : 'development',
    module   : { rules : [typescriptRule]},
    resolve  : resolve,
    plugins  : [ htmlPLugin],
    devServer: devServer,
    stats    : 'errors-warnings',
};