/**
 * 使用commonjs模块化语法
 * 向外暴露一个配置对象
 */
const path= require('path')//node内置
//__dirname ：全局变量，当前文件所在目录的绝对路径
const HtmlWebpackPlugin=require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
function resolve(dir){
    return path.resolve(__dirname,dir)
}

module.exports={
    //模式
    //mode:'development',
    //入口
    entry:{
        app:'./src/index.js'
    },
    //出口
    output:{
        path:resolve('dist'),//dist的绝对路径 所有打包生成文件的基础路径
        filename:'static/js/[name].bundle.js',
        publicPath:'/'
    },
    //模块打包器
    module:{
        rules:[//内部配置loader
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            
            //配置es6==>es5
            {
                test: /\.js$/, //处理js文件
                //exclude: /(node_modules|bower_components)/,//排除匹配的文件夹
                include:[resolve('src')],//只对匹配的文件夹处理
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],//配置预设包
                    plugins:[//配置预设包之外的插件包

                    ]
                  }
                }
            },
            //处理css
            {
                test:/\.css$/,
                //css-loader:将css转移到js中
                //style-loader:将js中css转移到htmld的<style>
                //vue-style-loader是对style-loader的增强
                use:['vue-style-loader','css-loader']//loader 处理从下向上，从右向左
            },
            //处理图片
            {
                test:/\.png|jpe?g|gif|svg$/,
                //loader:'file-loader',//不会进行小图片的base64处理
                //url-loader 内部会使用file-loader
                loader:'url-loader',//会进行小图片的base64处理
                options:{
                    limit:10*1024,//小于10k的图片就进行base64处理
                    name:'static/img/[name].[hash:7].[ext]'//相对于output.path
                }
            },
        ]
   },
    //插件
    plugins:[//插件实例对象
        new HtmlWebpackPlugin({
            template:'index.html'//在执行命令所在目录下查找
        }),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),

    ],
    //开发服务器
    devServer:{
        open:true,//自动打开浏览器
        quiet:true,//不做太多日志输出
        proxy: {
            "/api": {
              target: "http://localhost:4000",
              pathRewrite: {"^/api" : ""},
              changeOrigin: true
            }
        },
        historyApiFallback: true
    },
    //模块引入解析
    resolve:{
        /**
         * 简化模块路径编写
         * 加快打包速度
         */
        extensions:['.js','.vue'],//指定哪些后缀的模块可以省略
        alias:{
            '@':resolve('src'),
            '@comps':resolve('src/components'),
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    //配置开启source-map调试
    devtool: 'cheap-module-eval-source-map',
}