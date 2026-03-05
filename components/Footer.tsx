'use client'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/images/voisins_de_panier_logo.webp'

export default function Footer() {
  const handleOpenCookies = (e: React.MouseEvent) => {
    e.preventDefault()
    globalThis.dispatchEvent(new Event('open-cookie-settings'))
  }

  return (
    <footer className='main-footer'>
      <div className='container footer-grid'>
        <div className='footer-brand'>
          <Image
            src={Logo}
            alt='Logo Les Voisins de Panier'
            width={180}
            height={98}
            className='footer-logo'
          />
          <p className='text-large fw-bold mt-1'>Les Voisins de Panier</p>
          <p className='text-muted footer-tagline'>
            Le réflexe circuit-court en Isère. Soutenez nos producteurs entre
            Belledonne, Chartreuse et Vercors.
          </p>
        </div>

        <div className='footer-links'>
          <p className='footer-title'>En Savoir Plus</p>
          <nav>
            <Link href='/producteurs'>Nos Producteurs</Link>
            <Link href='/faq'>Foire aux questions</Link>
            <Link href='/contact'>Nous contacter</Link>
          </nav>
        </div>

        <div className='footer-links'>
          <p className='footer-title'>Infos Légales</p>
          <nav>
            <Link href='/mentions-legales'>Mentions Légales</Link>
            <Link href='/politique-de-confidentialite'>Confidentialité</Link>
            <button className='footer-cookie-link' onClick={handleOpenCookies}>
              Gestion des Cookies
            </button>
          </nav>
        </div>
      </div>

      <div className='container footer-bottom'>
        <hr className='separator' />
        <div className='footer-copyright'>
          <p>
            © {new Date().getFullYear()} Les Voisins de Panier — Fait avec 🌱 à
            Grenoble
          </p>
        </div>
      </div>
    </footer>
  )
}
