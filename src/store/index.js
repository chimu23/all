import { createStore } from 'vuex'
import getters from './getters'

// webpack 内置的自动导入
// const files = require.context('./modules', false, /.js$/)
// const modules = files.keys().reduce((modules, current) => {
//   const moduleName = current.replace(/^\.\/(.+).js$/, '$1')
//   modules[moduleName] = files(current).default
//   return modules
// }, {})

// vite提供的自动导入
const files = import.meta.globEager('./modules/*.js')
const modules = Object.keys(files).reduce((modules, moduleName) => {
  const module = files[moduleName].default
  modules[moduleName.replace(/^\.\/(.+)\/(.+).js$/, '$2')] = module
  return modules
}, {})

export default createStore({
  modules,
  getters,
})
