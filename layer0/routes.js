const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')

const prerenderRequests = require('./prerenderRequests')

module.exports = new Router()
	.prerender(prerenderRequests)
	.match('/service-worker.js', ({ serviceWorker }) => {
		return serviceWorker('.next/static/service-worker.js')
	})
	.use(nextRoutes)
