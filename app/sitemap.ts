import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.haneuldental.co.kr'
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/treatment`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/treatment/prosthetics`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/treatment/implant`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    // /treatment/aesthetic 은 noindex — sitemap 제외
    {
      url: `${baseUrl}/treatment/restorative`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/treatment/periodontal`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/treatment/tmj`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/fees`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/clinic-tour`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6
    },
  ]
}
