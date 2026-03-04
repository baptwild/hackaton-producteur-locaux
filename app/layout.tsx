import type { Metadata } from 'next'
import './styles.css'
import Link from 'next/link'
import Script from 'next/script'

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
      <head>
        <Script
          id='CookieConsent'
          src='https://policy.app.cookieinformation.com/uc.js'
          data-culture='FR'
          data-gcm-version='2.0'
          type='text/javascript'
        />
      </head>
      <body>
        <Script id='piwik-pro' strategy='afterInteractive'>
          {` 
            (function(window, document, dataLayerName, id) {
            window[dataLayerName]=window[dataLayerName]||[],window[dataLayerName].push({start:(new Date).getTime(),event:"stg.start"});var scripts=document.getElementsByTagName('script')[0],tags=document.createElement('script');
            var qP=[];dataLayerName!=="dataLayer"&&qP.push("data_layer_name="+dataLayerName);var qPString=qP.length>0?("?"+qP.join("&")):"";
            tags.async=!0,tags.src="https://wild-hackaton.containers.piwik.pro/"+id+".js"+qPString,scripts.parentNode.insertBefore(tags,scripts);
            !function(a,n,i){a[n]=a[n]||{};for(var c=0;c<i.length;c++)!function(i){a[n][i]=a[n][i]||{},a[n][i].api=a[n][i].api||function(){var a=[].slice.call(arguments,0);"string"==typeof a[0]&&window[dataLayerName].push({event:n+"."+i+":"+a[0],parameters:[].slice.call(arguments,1)})}}(i[c])}(window,"ppms",["tm","cm"]);
            })(window, document, 'dataLayer', 'e09fd7c3-30f1-4a78-a183-4e4e22f9d9d7');
          `}
        </Script>
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

        <main>{children}</main>

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
