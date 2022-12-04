const { withLayer0, withServiceWorker } = require('@layer0/next/config')

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false,
}

const nextPlugins = [
  withLayer0,
  [
    withServiceWorker,
    {
      layer0SourceMaps: true,
      disableLayer0DevTools: true,
      workboxOpts: { maximumFileSizeToCacheInBytes: 5 * 1024 * 1024 },
    },
  ],
]

module.exports = () => {
  return nextPlugins.reduceRight((acc, currentPlugin) => {
    if (Array.isArray(currentPlugin)) {
      const [plugin, config] = currentPlugin

      return plugin({ ...config, ...acc })
    }

    return currentPlugin(acc)
  }, nextConfig)
}
