import producersData from '@/data/producteurs.json'
import { Producteur } from '@/types/producteur'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const producers = producersData as Producteur[]

  const baseUrl = 'https://hackaton-producteur-locaux.vercel.app'
  const lastModified = new Date()

  const staticPages = [
    { url: baseUrl, lastModified },
    { url: `${baseUrl}/producteurs`, lastModified },
    { url: `${baseUrl}/faq`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
    { url: `${baseUrl}/mentions-legales`, lastModified },
  ]

  const categories = Array.from(
    new Set(producers.map((producer) => producer.category)),
  )
  const categoryPages = categories.map((slug) => ({
    url: `${baseUrl}/producteurs/${slug}`,
    lastModified,
  }))

  const producerPages = producers.map((p) => ({
    url: `${baseUrl}/producteur/${p.slug}`,
    lastModified,
  }))

  return [...staticPages, ...categoryPages, ...producerPages]
}
