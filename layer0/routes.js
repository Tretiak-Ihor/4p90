const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')

const prerenderRequests = require('./prerenderRequests')
const { cacheHandler, SSR, SERVICE_WORKER, STATIC_ASSETS } = require('./cache')

module.exports = new Router()
	.prerender(prerenderRequests)
	.match('/service-worker.js', ({ cache, serviceWorker }) => {
		cache(SERVICE_WORKER)
		return serviceWorker('.next/static/service-worker.js')
	})
	.match('/', cacheHandler(SSR))
	.match('/:file*.js', cacheHandler(STATIC_ASSETS))
	.use(nextRoutes)
