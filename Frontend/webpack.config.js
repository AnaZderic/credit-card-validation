
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports={
    
    mode: "development", 
  
    entry: "./index.js", 
    output: {
        
        path: path.resolve(__dirname, "./dist"),
        
        filename: "index_bundle.js"
    },
   
    target: "web",
    devServer: {
       
        port: "5000",
        
        static: {
            directory: path.join(__dirname, "public")
        },
        
        open: true,
        
        hot: true ,
       
        liveReload: true
    },
    resolve: {
       
        extensions: [".js",".jsx",".json", ".css"],
    },
    module:{
       
        rules: [
            {
                test: /\.(js|jsx)$/,   
                exclude: /node_modules/, 
                use:  'babel-loader' 
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html")
        }),
        new MiniCssExtractPlugin()
       
    ]
};