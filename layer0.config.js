const { join } = require('path')

module.exports = {
	connector: '@layer0/next',
	name: '4p90.com',
	team: 'Ihor Tretiak',
	prerenderConcurrency: 200,
	includeFiles: {
		[join('.next', 'BUILD_ID')]: true,
	},
	routes: './layer0/routes',
}
