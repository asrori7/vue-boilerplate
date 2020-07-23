module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  css: {
    sourceMap: false,
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        // eslint-disable-next-line quotes
        prependData: `@import "~@/sass/main.sass"`
      },
      scss: {
        // eslint-disable-next-line quotes
        prependData: `@import "~@/sass/main.scss";`
      }
    }
  },
  productionSourceMap: false,
  lintOnSave: process.env.NODE_ENV !== 'production'
}
