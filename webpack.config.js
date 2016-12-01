const path = require('path');
const ngtools = require('@ngtools/webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      "@angular/upgrade/static": "@angular/upgrade/bundles/upgrade-static.umd.js"
    }
  },
  entry: './src/main.ts',
  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: 'dist/',
    filename: "bundle.js"
  },
  plugins: [
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig.json'
    })
  ],
  module: {
    rules: [
		{
        test: /\.ts$/,
        use: '@ngtools/webpack'
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
	    {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
