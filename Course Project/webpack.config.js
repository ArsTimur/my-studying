//NodeJS Code Here!
const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'development',
    devtool: 'source-map',
  entry: "./js/script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
//   plugins: [new HtmlWebpackPlugin()],
  
  module:{
    rules:[
        {test:/\.css$/,use:['style-loader','css-loader']},
        
    ]
},

resolve: {
    extensions: ['.js', '.jsx', '.css'],   
},
devServer: {
    compress: true,
    port: 8080
},


};
