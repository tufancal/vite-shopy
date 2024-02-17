import shopify from 'vite-plugin-shopify'

export default {
  plugins: [
    shopify({
      themeRoot: './',
      sourceCodeDir: 'frontend',
      entrypointsDir: 'frontend/entrypoints',
      additionalEntrypoints: [],
      snippetFile: 'vite-tag.liquid',
      versionNumbers: false
    })
  ]
}