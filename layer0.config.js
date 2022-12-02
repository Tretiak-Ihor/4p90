const { join } = require('path')

// Learn more about this file at https://docs.layer0.co/guides/layer0_config
module.exports = {
  connector: '@layer0/next',
  name: '4p90.com',
  prerenderConcurrency: 200,
  includeFiles: {
    [join('.next', 'BUILD_ID')]: true,
  },
  routes: './layer0/routes.js',
}
