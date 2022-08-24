const rollup = require('rollup')
const rollupConfig = require('../rollup.config.js')
const path = require('path')

const inputOptions = Object.keys(rollupConfig).reduce((acc, cur) => {
  const inputKeys = [
    //核心参数
    'input',
    'external',
    'plugins',
    //高级参数
    'onwarn',
    'cache',
    //危险参数
    'acorn',
    'context',
    'moduleContext',
    'lagacy'
  ]

  if (inputKeys.includes(cur)) {
    return { ...acc, [cur]: rollupConfig[cur] }
  } else {
    return acc
  }

}, {})

const outputOptions = rollupConfig.output

//监听文件
function watch() {
  const EVENT_FLAG = {
    START: '监听器正在启动（重启）',
    BUNDLE_START: '构建单个文件束',
    BUNDLE_END: '完成文件束构建',
    END: '完成所有文件束构建',
    ERROR: '构建时遇到错误',
    FATAL: '遇到无可修复的错误'
  }

  const watcher = rollup.watch({
    ...rollupConfig,
    watch: {
      include: 'src/**',
      exclude: 'node_modules/**',
      skipWrite: true
    }
  })
  watcher.on('event', event => {
    console.log(event.code, EVENT_FLAG[event.code])

    //测试监听关闭
    if(event.code === 'END') watcher.close()
  })
}


async function build() {
  const bundle = await rollup.rollup(inputOptions)

  if (Array.isArray(outputOptions)) {
    outputOptions.forEach(outputOption => generateOutput(bundle, outputOption))
  } else {
    await generateOutput(bundle, outputOptions)
  }
}

async function generateOutput(bundle, outputOption) {
  //写入磁盘
  // bundle.write(outputOption)

  // const { output } = await bundle.generate(outputOption)
  // console.log('===output', JSON.stringify(output, null, 4))

}


watch()
build()