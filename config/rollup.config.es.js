import config from './rollup.config'

export default config({
  output: {
    format: 'es',
    file: 'lib/turndown-plugin-confluence-to-gfm.es.js'
  }
})
