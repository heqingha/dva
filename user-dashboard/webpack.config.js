const path = require('path');
module.exports = (webpackConfig, env) => {
    // 别名配置
    webpackConfig.resolve.alias = {
      '@': `${__dirname}/src`,
    //   'components': `src/components`,
    components: path.join(__dirname, 'src/components'),
    }
    return webpackConfig
  }