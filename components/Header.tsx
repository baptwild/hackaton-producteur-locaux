import Link from 'next/link'
import Logo from '@/public/images/logo.webp'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='main-header'>
      <nav className='container nav-container'>
        <Link href='/' className='header-logo-link'>
          <Image
            src={Logo}
            alt='Logo Les Voisins de Panier'
            width={128}
            height={70}
            className='header-logo'
            priority
          />
        </Link>

        <div className='nav-right'>
          <Link href='/producteurs' className='btn btn-header'>
            Trouver un producteur
          </Link>
        </div>
      </nav>
    </header>
  )
}
