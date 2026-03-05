import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Les Voisins de Panier',
  description:
    'Protection de vos données et gestion des cookies sur la plateforme Les Voisins de Panier.',
  robots: { index: false },
}

export default function PrivacyPolicy() {
  return (
    <div className='container section-padding' style={{ maxWidth: '850px' }}>
      <h1>Politique de Confidentialité</h1>
      <p className='text-large mb-2'>
        La présente politique de confidentialité définit la manière dont{' '}
        <strong>Les Voisins de Panier</strong> recueille, utilise et protège les
        informations de ses utilisateurs (ci-après "l'Utilisateur") dans le
        cadre de sa mission de promotion des circuits courts à Grenoble.
      </p>

      <section className='mb-2'>
        <h2>1. Collecte des données personnelles</h2>
        <p className='mb-1'>
          Nous collectons des données d'identification personnelle uniquement
          lorsque l'Utilisateur les communique volontairement (via le
          consentement analytics ou l'interaction avec les outils de contact).
        </p>
        <ul
          className='text-muted'
          style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}
        >
          <li>
            Données de navigation (via Piwik PRO) : Adresse IP anonymisée, type
            de terminal, pages consultées.
          </li>
          <li>
            Données d'engagement : Clics sur les catégories de producteurs,
            clics sur le bouton "Contacter".
          </li>
        </ul>
      </section>

      <section className='mb-2'>
        <h2>2. Utilisation des données (Piwik PRO)</h2>
        <p className='mb-1'>
          Notre plateforme utilise <strong>Piwik PRO Analytics</strong> pour
          mesurer l'audience et le comportement des utilisateurs. Cette analyse
          nous permet :
        </p>
        <ul
          className='text-muted'
          style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}
        >
          <li>
            D'améliorer l'expérience utilisateur (SXO) en identifiant les
            parcours de recherche locaux.
          </li>
          <li>
            De mesurer la conversion "Business" via le tracking des événements
            personnalisés (<em>click_contact_producteur</em>).
          </li>
          <li>
            De valider l'intérêt pour certaines filières (Maraîchers, Fromagers,
            etc.) sur la métropole grenobloise.
          </li>
        </ul>
      </section>

      <section className='mb-2'>
        <h2>3. Brique de Scraping & Données Professionnelles</h2>
        <p className='mb-1'>
          Dans le cadre de l'enrichissement de notre annuaire, nous utilisons
          une brique de scraping automatisée pour collecter des données{' '}
          <strong>exclusivement professionnelles et publiques</strong>.
        </p>
        <div className='local-seo-box mb-1'>
          <strong>Finalité :</strong> Faciliter la mise en relation entre
          consommateurs et producteurs locaux.
          <br />
          <strong>Données collectées :</strong> Nom de l'exploitation,
          spécialité, adresse professionnelle, téléphone public.
          <br />
          <strong>Conformité :</strong> Nous respectons les fichiers{' '}
          <em>robots.txt</em> des sources cibles et limitons la fréquence de nos
          requêtes (Rate Limiting).
        </div>
      </section>

      <section className='mb-2'>
        <h2>4. Base légale et Consentement</h2>
        <p>
          Le traitement de vos données de navigation repose sur votre{' '}
          <strong>consentement</strong> explicite via notre bandeau cookie. Le
          traitement des données des producteurs (issus du scraping) repose sur
          l'<strong>intérêt légitime</strong> de notre plateforme à proposer un
          service d'information d'intérêt public sur les filières durables en
          Isère.
        </p>
      </section>

      <section className='mb-2'>
        <h2>5. Droits de l'Utilisateur (RGPD)</h2>
        <p className='mb-1'>
          Conformément au Règlement Général sur la Protection des Données, vous
          disposez des droits suivants :
        </p>
        <ul
          className='text-muted'
          style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}
        >
          <li>Droit d'accès et de rectification de vos données.</li>
          <li>
            Droit à l'effacement (droit à l'oubli), particulièrement pour les
            producteurs souhaitant être retirés de l'annuaire.
          </li>
          <li>Droit d'opposition au tracking analytics.</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à l'adresse suivante :{' '}
          <strong>contact@les-voisins-de-panier.fr</strong>
        </p>
      </section>

      <section className='mb-2'>
        <h2>6. Protection et Partage des données</h2>
        <p>
          Nous ne vendons, n'échangeons ni ne louons aucune donnée personnelle à
          des tiers. Les données agrégées et anonymisées peuvent être partagées
          avec nos partenaires locaux (institutionnels ou coopératives) à des
          fins d'analyse du développement économique local.
        </p>
      </section>

      <section className='mt-3'>
        <p className='text-muted'>Dernière mise à jour : 5 mars 2026</p>
      </section>
    </div>
  )
}
