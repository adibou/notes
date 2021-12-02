const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");


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
    template : './config/index.html',
});

const pwaPlugin = new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
  });

const copyPlugin = new CopyPlugin({patterns : [{from : './public'}]});

/* ----- EXPORTS -------------------------- */

module.exports = {
    entry    : './index.tsx',
    mode     : 'production',
    module   : { rules : [typescriptRule]},
    resolve  : resolve,
    plugins  : [ htmlPLugin, copyPlugin],
    stats    : 'errors-warnings',
};