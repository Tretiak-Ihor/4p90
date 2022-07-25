const { join } = require('path')
const { existsSync, readFileSync } = require('fs')

// Read the Next.js build ID from '.next/BUILD_ID'
const buildIdPath = join(process.cwd(), '.next', 'BUILD_ID')

const getPrerenderRequests = async () => {
	const prerenderRequests = [{ path: '/' }]

	if (existsSync(buildIdPath)) {
		// Derive the API requests from the HTML page URLs
		const buildId = readFileSync(buildIdPath, 'utf8')
		const apiPaths = prerenderRequests.map((req) => ({ path: `/api${req.path}?__v__=${buildId}` }))
		prerenderRequests.push(...apiPaths)
	}

	return prerenderRequests
}

module.exports = getPrerenderRequests
