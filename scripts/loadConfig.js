const rollup = require('rollup')
const path = require('path')
const loadConfigFile = require('rollup/loadConfigFile')

//加载配置文件
loadConfigFile(path.resolve(__dirname, '../rollup.config.js'), { format: 'es' }).then(async ({ options, warnings }) => {
  console.log(options, warnings)
})