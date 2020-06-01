/*
* @Author: xuhongling
* @Date:   2020-04-27 11:20:05
* @Last Modified by:   xuhongling
* @Last Modified time: 2020-05-28 19:32:53
*/
const path = require('path')
const CracoLessPlugin = require("craco-less")
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
        }
      }
    }
  ],
  devServer: (devServerConfig, {env, paths, proxy, allowedHost}) => {
    devServerConfig.proxy = {
      '/3dtiles': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/3dtiles': '/'},
        changeOrigin: true
      }
    }
    return devServerConfig;
  }
}