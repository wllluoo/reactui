const path = require('path');

module.exports = {
  entry: [
    "babel-polyfill",
    './app/index.jsx'
  ],
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
        '.js', '.jsx',
    ],
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader", // translates CSS into CommonJS
            options: {
                modules: true,
                importLoaders: 2,
                sourceMap: true,
                // localIdentName: '[local]___[hash:base64:5]',
            },
        }, {
            loader: "less-loader", // compiles Less to CSS
            options: {
                outputStyle: 'expanded',
                sourceMap: true,
            },
        }]
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['es2015', 'react']
        //   }
        // }
      },
    ]
  }
};
