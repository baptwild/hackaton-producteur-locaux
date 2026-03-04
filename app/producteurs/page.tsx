import producersData from '@/data/producteurs.json'
import { Producteur } from '@/types/producteur'
import Link from 'next/link'

export default function ProducteursPage() {
  const producers = producersData as Producteur[]

  return (
    <div className='container section-padding'>
      <header>
        <h1>Les producteurs de Grenoble</h1>
        <p className='text-muted'>
          Tous nos partenaires engagés dans une démarche durable.
        </p>
      </header>

      <div className='producers-grid'>
        {producers.map((producer) => (
          <Link
            href={`/producteur/${producer.slug}`}
            key={producer.id}
            className='card'
          >
            <span className='badge'>{producer.categoryLabel}</span>
            <h3>{producer.name}</h3>
            <p className='text-muted'>{producer.description}</p>
            <hr className='separator' />
            <small>📍 {producer.city}</small>
          </Link>
        ))}
      </div>
    </div>
  )
}
