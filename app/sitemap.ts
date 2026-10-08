import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.haneuldental.co.kr'

  return [
    {
      url: baseUrl,
      changeFrequency: 'monthly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/treatment`,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/treatment/prosthetics`,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/treatment/implant`,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    // /treatment/aesthetic ? noindex ??sitemap ?쒖쇅
    {
      url: `${baseUrl}/treatment/restorative`,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/treatment/periodontal`,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/treatment/tmj`,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/fees`,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/schedule`,
      changeFrequency: 'weekly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/clinic-tour`,
      changeFrequency: 'monthly',
      priority: 0.6
    },
  ]
}
