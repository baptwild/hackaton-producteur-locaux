import producersData from '@/data/producteurs.json'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Producteur } from '@/types/producteur'

const producers = producersData as Producteur[]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const producer = producers.find((item) => item.slug === slug)

  return {
    title: producer
      ? `${producer.name} - Producteur à ${producer.city}`
      : 'Producteur non trouvé',
  }
}

export default async function ProducerPage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>
}>) {
  const { slug } = await params
  const producer = producers.find((item) => item.slug === slug)

  if (!producer) return notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: producer.name,
    description: producer.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: producer.city,
      addressRegion: 'Isère',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: producer.lat,
      longitude: producer.lng,
    },
    url: `https://voisins-de-panier.fr/producteur/${producer.slug}`,
    image: producer.image,
    priceRange: '€€',
    knowsAbout: [
      producer.category,
      'Agriculture Biologique',
      'Vente directe',
      'Grenoble',
    ],
  }

  const nearby = producers
    .filter((item) => item.city === producer.city && item.id !== producer.id)
    .slice(0, 3)

  return (
    <div className='container section-padding'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className='text-muted mb-2'>
        <Link href='/'>Accueil</Link> /{' '}
        <Link href='/producteurs'>Producteurs</Link> / {producer.name}
      </nav>

      <div className='producer-layout'>
        <article>
          <span className='badge'>{producer.categoryLabel}</span>
          <h1>{producer.name}</h1>
          <p className='text-large mb-2'>{producer.description}</p>

          <section className='card'>
            <h2>Nos produits et engagements</h2>
            <p>
              Ce producteur propose des produits de saison, certifiés
              écoresponsables à <strong>{producer.city}</strong>.
            </p>
          </section>
        </article>

        <aside className='contact-aside'>
          <h3 className='contact-title'>Contact & Direct</h3>
          <p className='mb-1'>📍 {producer.address}</p>
          <p className='mb-1'>📞 {producer.phone || 'Non renseigné'}</p>
          <p className='mb-1 text-muted'>
            📧 {producer.email || 'Non renseigné'}
          </p>
          <button className='btn btn-primary w-full mt-1'>
            Envoyer un message
          </button>
        </aside>
      </div>

      <section className='nearby-section mt-2'>
        <h3 className='mb-1'>Aussi à {producer.city}</h3>
        <div className='producers-grid'>
          {nearby.map((pro) => (
            <Link
              key={pro.id}
              href={`/producteur/${pro.slug}`}
              className='card-mini'
            >
              <strong>{pro.name}</strong>
              <span className='text-muted'>{pro.categoryLabel}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
