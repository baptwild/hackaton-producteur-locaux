'use client'

import producersData from '@/data/producteurs.json'
import { DataLayer } from '@/types/dataLayer'
import { Producteur } from '@/types/producteur'
import Link from 'next/link'

export default function Home() {
  const producers = producersData as Producteur[]

  const categories = Array.from(
    new Map(producers.map((p) => [p.category, p.categoryLabel])).entries(),
  ).map(([slug, label]) => ({ slug, label }))

  const dataLayer = (categoryLabel: string) => {
    const win = globalThis as unknown as DataLayer
    if (win.dataLayer) {
      win.dataLayer.push({
        event: 'view_category_producteurs',
        category_name: categoryLabel,
      })
      console.log('Category tracked:', categoryLabel)
    }
  }

  return (
    <div className='container section-padding'>
      <section className='hero'>
        <div className='hero-content'>
          <h1>Mangez local et écoresponsable à Grenoble</h1>
          <p className='text-muted'>
            La plateforme de mise en relation directe avec les producteurs bio
            et artisans de la métropole Grenobloise.
          </p>
          <div className='hero-links'>
            <Link href='/producteurs' className='btn btn-primary'>
              Découvrir les producteurs
            </Link>
          </div>
        </div>
      </section>

      <section className='section-padding'>
        <h2 className='text-center'>Nos filières locales</h2>
        <div className='producers-grid'>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/producteurs/${cat.slug}`}
              className='card text-center'
              onClick={() => dataLayer(cat.label)}
            >
              <span className='icon-large'>🥗</span>
              <h3>{cat.label}</h3>
              <p className='text-muted'>Voir tout →</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
