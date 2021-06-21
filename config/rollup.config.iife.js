import config from './rollup.config'

export default config({
  output: {
    format: 'iife',
    file: 'dist/turndown-plugin-confluence-to-gfm.js',
    name: 'TurndownPluginConfluenceToGfmService'
  }
})
