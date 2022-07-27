const { CustomCacheKey } = require('@layer0/core/router')

const ONE_DAY = 60 * 60 * 24
const ONE_WEEK = ONE_DAY * 7

const key = new CustomCacheKey().excludeAllQueryParametersExcept('id')

module.exports = {
	SSR: {
		key,
		browser: false,
		edge: {
			forcePrivateCaching: true,
			maxAgeSeconds: ONE_DAY,
			staleWhileRevalidateSeconds: ONE_DAY,
		},
	},
	STATIC_ASSETS: {
		key,
		browser: {
			maxAgeSeconds: 0,
			serviceWorkerSeconds: ONE_WEEK,
		},
		edge: {
			forcePrivateCaching: true,
			maxAgeSeconds: ONE_WEEK,
			staleWhileRevalidateSeconds: ONE_WEEK,
		},
	},
	SERVICE_WORKER: {
		key,
		browser: { maxAgeSeconds: ONE_WEEK },
		edge: {
			maxAgeSeconds: ONE_WEEK,
			staleWhileRevalidateSeconds: ONE_DAY,
		},
	},
	cacheHandler: (config) => {
		return ({ cache }) => cache(config)
	},
}
