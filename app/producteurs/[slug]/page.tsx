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
  const categoryLabel =
    producers.find((p) => p.category === slug)?.categoryLabel || 'Producteurs'
  return {
    title: `${categoryLabel} à Grenoble - Les Voisins de Panier`,
    description: `Découvrez notre sélection de ${categoryLabel.toLowerCase()} locaux et écoresponsables en Isère.`,
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const filtered = producers.filter((p) => p.category === slug)

  if (filtered.length === 0) return notFound()

  const categoryTitle = filtered[0].categoryLabel

  return (
    <div className='container section-padding'>
      <nav className='text-muted'>
        <Link href='/producteurs'>← Tous les producteurs</Link>
      </nav>

      <header className='category-header'>
        <h1 className='mt-1'>{categoryTitle} à Grenoble</h1>
        <p className='text-muted'>
          Découvrez notre sélection de {categoryTitle.toLowerCase()} en circuit
          court.
        </p>
      </header>

      <div className='producers-grid'>
        {filtered.map((p) => (
          <Link href={`/producteur/${p.slug}`} key={p.id} className='card'>
            <span className='badge'>Local</span>
            <h3>{p.name}</h3>
            <p className='text-muted'>{p.description}</p>
            <div className='card-cta'>Voir le profil →</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
