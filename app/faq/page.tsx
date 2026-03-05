import Breadcrumb from '@/components/Breadcrumb'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ Circuit Court Grenoble | Aide & Commandes Les Voisins de Panier',
  description:
    'Réponses sur la vente directe, les labels bio et la livraison de produits locaux en Isère. Tout savoir sur le fonctionnement de notre marketplace grenobloise.',
}

const FAQ = () => {
  const faqs = [
    {
      id: 'commande-directe',
      q: 'Comment commander à un producteur local à Grenoble ?',
      a: 'Pour commander en circuit court, sélectionnez un producteur sur notre plateforme et utilisez le bouton de contact direct. La transaction se fait sans intermédiaire pour garantir une rémunération juste aux agriculteurs de l’Isère.',
    },
    {
      id: 'labels-bio',
      q: 'Les produits de la marketplace sont-ils certifiés bio ou écoresponsables ?',
      a: 'Oui, we sélectionnons rigoureusement nos partenaires en Auvergne-Rhône-Alpes. Ils disposent de certifications reconnues : AB (Agriculture Biologique), Nature & Progrès, ou le label local "Isère Savoir-Faire".',
    },
    {
      id: 'qualite-produits',
      q: 'Comment est garantie la fraîcheur des produits locaux ?',
      a: 'La fraîcheur est assurée par le modèle de vente directe. Les légumes, fruits et produits laitiers sont souvent récoltés ou préparés le jour même de la mise à disposition dans la métropole grenobloise.',
    },
    {
      id: 'type-produits',
      q: 'Quels types de produits peut-on acheter en circuit court en Isère ?',
      a: 'Notre catalogue inclut des légumes de saison, fruits du Grésivaudan, fromages du Vercors et de Chartreuse, miel de montagne, œufs bio et cosmétiques artisanaux fabriqués à Grenoble.',
    },
    {
      id: 'points-retrait',
      q: 'Où se situent les points de retrait des paniers à Grenoble ?',
      a: 'Chaque producteur définit ses points de collecte : directement à la ferme (Meylan, Saint-Ismier), sur les marchés locaux (Estacade, Hoche) ou via des points relais partenaires en centre-ville.',
    },
    {
      id: 'livraison-domicile',
      q: 'Proposez-vous la livraison de produits bio à domicile à Grenoble ?',
      a: 'Certains de nos producteurs partenaires proposent la livraison à domicile dans la métropole de Grenoble (Échirolles, Fontaine, Saint-Martin-d’Hères). Les zones de livraison sont précisées sur chaque profil.',
    },
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }

  return (
    <div className='container section-padding'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className='faq-wrapper'>
        <Breadcrumb steps={[{ label: 'Foire aux Questions' }]} />
        <header className='faq-header'>
          <span className='badge'>Assistance Locale</span>
          <h1 className='mt-1'>Questions Fréquemment Posées</h1>
          <p className='text-muted'>
            Tout ce qu'il faut savoir sur l'agriculture durable et la
            consommation locale en région grenobloise.
          </p>
        </header>

        <section className='faq-grid'>
          {faqs.map((f) => (
            <div
              key={f.id}
              id={f.id}
              className='card faq-card'
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <span style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                💡
              </span>
              <h2 className='faq-question-text' style={{ fontSize: '1.1rem' }}>
                {f.q}
              </h2>
              <p
                className='faq-answer-text'
                style={{ fontSize: '0.95rem', flexGrow: 1 }}
              >
                {f.a}
              </p>
            </div>
          ))}
        </section>

        <footer className='card faq-footer-cta mt-3 text-center'>
          <h3>Vous ne trouvez pas votre réponse ?</h3>
          <p className='mb-1'>
            Nos producteurs partenaires vous répondent directement sur leurs
            pages respectives.
          </p>
          <div className='mt-1'>
            <Link href='/producteurs' className='btn btn-primary'>
              Voir les producteurs
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default FAQ
