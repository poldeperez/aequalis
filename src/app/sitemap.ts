import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aequalisadvocades.com'
  const locales = ['es', 'ca', 'en']
  const pages = ['', '/services', '/about', '/contact', '/privacy', '/legal']
  
  const sitemap: MetadataRoute.Sitemap = []
  
  // home URL
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        locales.map(l => [l, `${baseUrl}/${l}`])
      ),
    },
  })
  // Add all pages for all locales
  locales.forEach(locale => {
    pages.forEach(page => {
      sitemap.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${baseUrl}/${l}${page}`])
          ),
        },
      })
    })
  })
  
  return sitemap
}
