import type { Metadata } from 'next'
import './styles.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Les Voisins de Panier Grenoble',
  description:
    'Marketplace locale écoresponsable pour les producteurs locaux de Grenoble',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr'>
      <body>
        <header className='main-header'>
          <nav className='container nav-container'>
            <Link href='/' className='logo'>
              Les Voisins de Panier
            </Link>
            <div className='nav-links'>
              <Link href='/producteurs'>Producteurs</Link>
              <Link href='/faq'>FAQ</Link>
            </div>
          </nav>
        </header>

        <main className='min-h-screen'>{children}</main>

        <footer className='main-footer'>
          <div className='container'>
            <p>
              <strong>Les Voisins de Panier Grenoble</strong>
            </p>
            <p className='text-muted'>Le réflexe circuit-court en Isère.</p>
            <div>
              <Link href='/mentions-legales'>Mentions Légales</Link> |{' '}
              <Link href='/contact'>Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
