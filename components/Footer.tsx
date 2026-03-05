import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='main-footer'>
      <div className='container footer-grid'>
        <div>
          <p className='text-large fw-bold'>Les Voisins de Panier</p>
          <p className='text-muted'>
            Le réflexe circuit-court en Isère, entre Belledonnes, Chartreuse et
            Vercors.
          </p>
        </div>
        <div>
          <p className='fw-bold mb-1'>Navigation</p>
          <Link href='/producteurs'>Producteurs</Link>
          <br />
          <Link href='/faq'>Foire aux questions</Link>
        </div>
        <div>
          <p className='fw-bold mb-1'>Légal</p>
          <Link href='/mentions-legales'>Mentions Légales</Link>
          <br />
          <Link href='/politique-de-confidentialite'>
            Politique de Confidentialité
          </Link>
        </div>
      </div>
    </footer>
  )
}
