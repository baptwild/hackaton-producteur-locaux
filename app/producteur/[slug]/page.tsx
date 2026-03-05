import producersData from '@/data/producteurs.json'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Producteur } from '@/types/producteur'
import ContactButton from '@/components/ContactButton'
import Breadcrumb from '@/components/Breadcrumb'

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

      <Breadcrumb
        steps={[
          { label: 'Producteurs', href: '/producteurs' },
          {
            label: producer.categoryLabel,
            href: `/producteurs/${producer.category}`,
          },
          { label: producer.name },
        ]}
      />

      <div className='producer-layout'>
        <article className='producer-main'>
          <header className='producer-header'>
            <div className='header-badges'>
              <span className='category-tag'>{producer.categoryLabel}</span>
              {producer.certifications.map((certif) => (
                <span className='bio-tag' key={certif}>
                  🌿 {certif}
                </span>
              ))}
            </div>
            <h1>{producer.name}</h1>
            <p className='lead-text'>{producer.description}</p>
          </header>

          <section className='producer-story card'>
            <div className='card-icon'>🌾</div>
            <h2>Le savoir-faire</h2>
            <p>
              Ce producteur cultive l'excellence à{' '}
              <strong>{producer.city}</strong>. En choisissant ses produits,
              vous soutenez une économie de proximité et réduisez l'empreinte
              carbone de votre panier.
            </p>
            <div className='commitment-list'>
              <div className='commitment-item'>✅ Circuit court direct</div>
              <div className='commitment-item'>✅ Saisonnalité respectée</div>
              <div className='commitment-item'>✅ Origine Isère garantie</div>
            </div>
          </section>
        </article>

        <aside className='producer-sidebar'>
          <div className='contact-sticky-card'>
            <h3 className='contact-title'>Contact & Direct</h3>

            <div className='contact-info-list'>
              <div className='info-item'>
                <span className='info-icon'>📍</span>
                <div className='info-content'>
                  <label>Adresse</label>
                  <span>{producer.address}</span>
                </div>
              </div>

              <div className='info-item'>
                <span className='info-icon'>📞</span>
                <div className='info-content'>
                  <label>Téléphone</label>
                  <span>{producer.phone || 'Sur demande'}</span>
                </div>
              </div>

              <div className='info-item'>
                <span className='info-icon'>📧</span>
                <div className='info-content'>
                  <label>Email</label>
                  <span>{producer.email || 'Via le bouton contact'}</span>
                </div>
              </div>
            </div>

            <div className='sidebar-action'>
              <ContactButton producerName={producer.name} />
              <p className='helper-text'>Réponse généralement sous 24h</p>
            </div>
          </div>
        </aside>
      </div>

      {nearby.length > 0 && (
        <section className='nearby-section mt-3'>
          <div className='section-header-inline'>
            <h3>Autres producteurs à {producer.city}</h3>
            <Link href='/producteurs' className='text-link'>
              Voir tout →
            </Link>
          </div>
          <div className='producers-grid-mini'>
            {nearby.map((pro) => (
              <Link
                key={pro.id}
                href={`/producteur/${pro.slug}`}
                className='mini-card'
              >
                <div className='mini-card-info'>
                  <strong>{pro.name}</strong>
                  <span>{pro.categoryLabel}</span>
                </div>
                <span className='arrow'>→</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
