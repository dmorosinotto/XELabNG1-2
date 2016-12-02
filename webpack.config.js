const path = require('path');
const ngtools = require('@ngtools/webpack'); //ONLY NG2

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
    }) // ONLY NG2
  ],
  module: {
    rules: [
		{
        test: /\.ts$/,
        //use: 'awesome-typescript-loader' //ONLY NG1-METADATA
        use: '@ngtools/webpack' //ONLY NG2
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
	    {
        test: /\.css$/,
        //use: [ 'style-loader', 'css-loader' ] //ONLY NG1-METADATA
        use: 'raw-loader', //ONLY NG2
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};
