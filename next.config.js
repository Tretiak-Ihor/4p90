const { withLayer0, withServiceWorker } = require('@layer0/next/config')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	poweredByHeader: false,
}

module.exports = (phase, config) =>
	withLayer0(
		withServiceWorker({
			layer0SourceMaps: true,
			disableLayer0DevTools: true,
			...nextConfig,
		})
	)
