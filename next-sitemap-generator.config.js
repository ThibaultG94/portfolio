const SitemapGenerator = require('next-sitemap-generator');

module.exports = {
	baseUrl: 'http://localhost:3000/',
	pagesDirectory: __dirname + '/pages',
	targetDirectory: 'public/',
	ignoredExtensions: ['png', 'jpg'],
	pagesConfig: {
		'/': {
			priority: '1.0',
		},
		'/about': {
			priority: '0.9',
		},
		'/portfolio': {
			priority: '0.6',
		},
		'/contact': {
			priority: '0.7',
		},
		'/projects/': {
			priority: '0.8',
		},
	},
};

SitemapGenerator.generateSitemap();
