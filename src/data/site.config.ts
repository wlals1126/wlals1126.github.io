interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://wlals1126.github.io',
	author: '유지민',
	title: '유지민 블로그',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post',
	paginationSize: 6
}
