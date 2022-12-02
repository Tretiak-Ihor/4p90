import { Router } from '@layer0/core/router'
import { nextRoutes } from '@layer0/next'

const prerenderRequests = require('./prerender-requests')

const AppRouter = new Router()
  .prerender(prerenderRequests)
  .match('/service-worker.js', ({ serviceWorker }) => {
    return serviceWorker('.next/static/service-worker.js')
  })
  .match('/__xdn__/cache-manifest.js', ({ redirect }) => {
    redirect('/__layer0__/cache-manifest.js')
  })
  .use(nextRoutes)

export default AppRouter
