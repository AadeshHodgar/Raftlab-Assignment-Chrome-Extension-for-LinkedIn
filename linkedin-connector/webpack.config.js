const path = require('path');

module.exports = {
  entry: './src/index.js',  // Main entry point for your React app
  output: {
    filename: 'content.js',  // Output filename
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Include .js and .jsx files
        exclude: /node_modules/,  // Exclude node_modules
        use: {
          loader: 'babel-loader',  // Use Babel loader
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],  // Presets for modern JS and React
          },
        },
      },
      {
        test: /\.css$/,  // Handle CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve these extensions
  },
};
