import Breadcrumb from '@/components/Breadcrumb'
import producersData from '@/data/producteurs.json'
import { Producteur } from '@/types/producteur'
import Link from 'next/link'

export default function ProducteursPage() {
  const producers = producersData as Producteur[]

  return (
    <div className='container section-padding'>
      <Breadcrumb steps={[{ label: 'Producteurs' }]} />
      <header className='page-header'>
        <span className='badge-hero'>Annuaire Local</span>
        <h1>Les producteurs de Grenoble</h1>
        <p className='text-muted large'>
          Découvrez les artisans et agriculteurs qui font vivre le circuit court
          en Isère.
        </p>
      </header>

      <div className='producers-grid'>
        {producers.map((producer) => (
          <Link
            href={`/producteur/${producer.slug}`}
            key={producer.id}
            className='producer-card'
          >
            <div className='card-header'>
              <span className='category-tag'>{producer.categoryLabel}</span>
              <span className='location-tag'>📍 {producer.city}</span>
            </div>
            <h3>{producer.name}</h3>
            <p className='description'>{producer.description}</p>
            <div className='card-footer'>
              <span className='view-link'>Consulter la fiche →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
