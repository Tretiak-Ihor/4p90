import { skipWaiting, clientsClaim } from 'workbox-core'
import { precacheAndRoute } from 'workbox-precaching'

import { Prefetcher } from '@layer0/prefetch/sw'

skipWaiting()
clientsClaim()
precacheAndRoute(self.__WB_MANIFEST || [])
self.__WB_DISABLE_DEV_LOGS = true

new Prefetcher().route()
