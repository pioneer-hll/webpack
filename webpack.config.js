/**
 * Created by hll on 2017/10/10.
 */
module.exports={
    entry:'./src/main.js',  //指定打包的入口文件
    output:{        //把打包文件放置到什么位置去
        path:__dirname+'/dist',
        filename:'build.js'
    },
    module:{
        loaders:[{
            test:/\.css$/,
            loader:'style-loader!css-loader'
        },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            }
        ]
    }
}