const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias:{
      '@components': path.resolve(__dirname, 'src/components/'),
      '@container': path.resolve(__dirname, 'src/containers/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@stylesComponents': path.resolve(__dirname, 'src/styles/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
      '@portfolio': path.resolve(__dirname, 'src/assets/portfolio/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
      {
        test: /\.(png|PNG|svg|jpg|jpeg|gif)$/,
        type: 'asset'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets[name].css',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3005,
    historyApiFallback: true,
    open: true,
  },
};
