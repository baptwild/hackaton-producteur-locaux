'use client'

import producersData from '@/data/producteurs.json'
import { CATEGORY_ICONS } from '@/enums/category'
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
    }
  }

  return (
    <div className='home-wrapper'>
      <section className='hero-section'>
        <div className='container'>
          <div className='hero-content'>
            <span className='badge-hero'>Local & Durable</span>
            <h1>Mangez local et éco responsable à Grenoble</h1>
            <p className='hero-subtitle'>
              La plateforme de mise en relation directe avec les meilleurs
              maraîchers, fromagers et artisans de l'Isère.
            </p>
            <div className='hero-actions'>
              <Link href='/producteurs' className='btn btn-primary btn-lg'>
                Parcourir les producteurs
              </Link>
              <Link href='/faq' className='btn btn-outline btn-lg'>
                Comment ça marche ?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='container section-padding'>
        <div className='section-header'>
          <h2>Nos filières locales</h2>
          <p className='text-muted'>
            Sélectionnez une filière pour découvrir tous nos producteurs du
            bassin grenoblois. De la ferme à votre assiette, explorez la
            richesse de nos terroirs !
          </p>
        </div>

        <div className='categories-grid'>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/producteurs/${cat.slug}`}
              className='category-card'
              onClick={() => dataLayer(cat.label)}
            >
              <div className='category-icon-wrapper'>
                <span className='category-emoji'>
                  {CATEGORY_ICONS[cat.slug] || '🚜'}
                </span>
              </div>
              <div className='category-info'>
                <h3>{cat.label}</h3>
                <span className='category-link'>Découvrir →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
