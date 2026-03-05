import producersData from '@/data/producteurs.json'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Producteur } from '@/types/producteur'
import Breadcrumb from '@/components/Breadcrumb'

const producers = producersData as Producteur[]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const categoryLabel =
    producers.find((producer) => producer.category === slug)?.categoryLabel ||
    'Producteurs'

  return {
    title: `${categoryLabel} à Grenoble - Les Voisins de Panier`,
    description: `Découvrez notre sélection de ${categoryLabel.toLowerCase()} locaux et écoresponsables en Isère.`,
  }
}

export default async function CategoryPage({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params
  const filtered = producers.filter((p) => p.category === slug)
  if (filtered.length === 0) return notFound()

  const categoryTitle = filtered[0].categoryLabel

  return (
    <div className='container section-padding'>
      <Breadcrumb
        steps={[
          { label: 'Producteurs', href: '/producteurs' },
          { label: categoryTitle },
        ]}
      />
      <Link href='/#categories' className='back-link'>
        ← Retour aux catégories
      </Link>

      <header className='page-header mt-1'>
        <h1>{categoryTitle} à Grenoble</h1>
        <p className='text-muted large'>
          Une sélection de {filtered.length} {categoryTitle.toLowerCase()}{' '}
          engagés près de chez vous.
        </p>
      </header>

      <div className='producers-grid'>
        {filtered.map((p) => (
          <Link
            href={`/producteur/${p.slug}`}
            key={p.id}
            className='producer-card'
          >
            <div className='card-header'>
              <span className='location-tag'>📍 {p.city}</span>
              {p.certifications.map((certif) => (
                <span className='bio-tag' key={certif}>
                  🌿 {certif}
                </span>
              ))}
            </div>
            <h3>{p.name}</h3>
            <p className='description'>{p.description}</p>
            <div className='card-footer'>
              <span className='view-link'>Voir la fiche producteur →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
