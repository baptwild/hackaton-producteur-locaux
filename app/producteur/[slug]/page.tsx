import producers from '@/data/producteurs.json'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const p = producers.find((item) => item.slug === slug)
  return {
    title: p ? `${p.name} - Producteur à ${p.city}` : 'Producteur non trouvé',
  }
}

export default async function ProducerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const p = producers.find((item) => item.slug === slug)

  if (!p) return notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: p.name,
    description: p.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: p.address,
      addressLocality: p.city,
      postalCode: p.postalCode,
      addressCountry: 'FR',
    },
  }

  return (
    <div className='container section-padding'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className='text-muted mb-2'>
        <Link href='/'>Accueil</Link> /{' '}
        <Link href='/producteurs'>Producteurs</Link> / {p.name}
      </nav>

      <div className='producer-layout'>
        <article>
          <span className='badge'>{p.categoryLabel}</span>
          <h1>{p.name}</h1>
          <p className='text-large mb-2'>{p.description}</p>

          <section className='card'>
            <h2>Nos produits et engagements</h2>
            <p>
              Ce producteur propose des produits de saison, certifiés
              écoresponsables à <strong>{p.city}</strong>.
            </p>
          </section>
        </article>

        <aside className='contact-aside'>
          <h3 className='contact-title'>Contact & Direct</h3>
          <p className='mb-1'>📍 {p.address}</p>
          <p className='mb-1'>📞 {p.phone || 'Non renseigné'}</p>
          <p className='mb-1 text-muted'>📧 {p.email || 'Non renseigné'}</p>
          <button className='btn btn-primary w-full mt-1'>
            Envoyer un message
          </button>
        </aside>
      </div>
    </div>
  )
}
