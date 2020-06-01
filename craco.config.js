/*
* @Author: xuhongling
* @Date:   2020-04-27 11:20:05
* @Last Modified by:   xuhongling
* @Last Modified time: 2020-06-01 23:05:12
*/
const path = require('path')
const CracoLessPlugin = require("craco-less")
const postcssPxToViewport = require('postcss-px-to-viewport')
const cssnano = require('cssnano')

module.exports = {
	webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'iconfont': path.resolve(__dirname, 'src/static/iconfont'),
      'static': path.resolve(__dirname, 'src/static'),
      'store': path.resolve(__dirname, 'src/store'),
      'reducers': path.resolve(__dirname, 'src/redux/reducers'),
      'utils': path.resolve(__dirname, 'src/utils')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: {localIdentName: '[local]_[hash:base64:5]'}
        },
        postcssLoaderOptions: {
          ident: "postcss",
          plugins: () => [
            postcssPxToViewport({
              viewportWidth: 375,  // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
              viewportHeight: 667,  // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
              unitPrecision: 5,  // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
              viewportUnit: 'vw',  // 指定需要转换成的视窗单位，建议使用vw
              selectorBlackList: ['.ignore', '.hairlines'],  // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
              minPixelValue: 1,  // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
              mediaQuery: false  // 允许在媒体查询中转换`px`
            }),
            cssnano({
              "cssnano-preset-advanced": {
                zindex: false,
                autoprefixer: false
              }
            })
          ]
        }
      }
    }
  ],
  devServer: (devServerConfig, {env, paths, proxy, allowedHost}) => {
    devServerConfig.proxy = {
      '/app': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/app': '/'},
        changeOrigin: true
      }
    }
    return devServerConfig;
  }
}