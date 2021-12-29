const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: true,
  productionSourceMap: false,
  css: {
    sourceMap: false,
    extract: false,
    loaderOptions: {
      sass: {
        // Whatever you do, do not remove the semicolon in the import statement below, or 💥
        additionalData: '@import "@/styles/config.scss";',
      },
    },
  },
  pwa: {
    name: 'Matateljen',
    themeColor: '#000000',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'no',
    appleMobileWebAppStatusBarStyle: 'default',
    manifestPath: 'manifest.json',
    // workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      // swSrc: 'service-worker.js',
      // ...other Workbox options...
      exclude: ['.htaccess'],
    },
  },
});
