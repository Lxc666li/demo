var path=require("path");
module.exports={
   mode:"development",
   entry:"./lxc/one.js",
   output:{
      path:path.resolve(__dirname,"./"),
      filename:"index.js" //引入HTML中的文件
   },
    module:{
      rules:[
      {
         test:/\.css$/,
        
         use:["style-loader","css-loader"]
    },
    {
          test:/\.(js|jsx)$/,
         use:{
            loader:"babel-loader",
            options:{
               presets:["es2015","react","stage-0"]
            }
         }
    }
    ]
    }
}
