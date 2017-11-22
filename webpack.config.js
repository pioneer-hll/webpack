/**
 * Created by hll on 2017/10/10.
 */
module.exports={
    entry:'./src/main.js',  //ָ�����������ļ�
    output:{        //�Ѵ���ļ����õ�ʲôλ��ȥ
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