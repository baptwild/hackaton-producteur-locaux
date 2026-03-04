import producers from '@/data/producteurs.json'
import Link from 'next/link'

export default function Home() {
  const categories = Array.from(
    new Map(producers.map((p) => [p.category, p.categoryLabel])).entries(),
  ).map(([slug, label]) => ({ slug, label }))

  return (
    <div className='container section-padding'>
      <section className='hero'>
        <div className='hero-content'>
          <h1>Mangez local et écoresponsable à Grenoble</h1>
          <p className='text-muted'>
            La plateforme de mise en relation directe avec les producteurs bio
            et artisans de la métropole Grenobloise.
          </p>
          <div>
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
            <div key={cat.slug} className='card text-center'>
              <span className='icon-large'>🥗</span>
              <h3>{cat.label}</h3>
              <Link href={`/producteurs/${cat.slug}`} className='text-muted'>
                Voir tout →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
