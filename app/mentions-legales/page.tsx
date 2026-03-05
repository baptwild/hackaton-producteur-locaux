import Breadcrumb from '@/components/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales - Les Voisins de Panier',
  description:
    'Mentions légales pour Les Voisins de Panier, votre marketplace locale et écoresponsable.',
  robots: { index: false },
}

const MentionsLegales: React.FC = () => {
  return (
    <div className='container section-padding'>
      <Breadcrumb steps={[{ label: 'Mentions Légales' }]} />
      <div className='prose-container'>
        <header className='mb-3 text-center'>
          <h1>Mentions légales</h1>
        </header>
        <p>
          Conformément à l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour
          la confiance dans l'économie numérique, nous vous informons que :
        </p>

        <h2>Éditeur du site</h2>
        <p>
          Le site <strong>Les Voisins de Panier</strong> est édité par :
        </p>
        <p>
          <strong>[Nom de la société / Nom de l'éditeur]</strong>
          <br />
          Adresse : [Votre Adresse]
          <br />
          E-mail : [Votre Email]
          <br />
          Téléphone : [Votre numéro de téléphone]
          <br />
          Numéro de SIRET : [Votre numéro SIRET]
        </p>

        <h2>Directeur de la publication</h2>
        <p>
          <strong>[Nom du responsable]</strong>
        </p>

        <h2>Hébergement</h2>
        <p>Le site est hébergé par :</p>
        <p>
          <strong>[Nom de l'hébergeur]</strong>
          <br />
          Adresse : [Adresse de l'hébergeur]
          <br />
          Téléphone : [Numéro de téléphone de l'hébergeur]
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site (textes, images, logos, etc.) est la
          propriété de <strong>Les Voisins de Panier</strong> ou de ses
          partenaires. Toute reproduction est interdite sans autorisation
          préalable.
        </p>

        <h2>Données personnelles</h2>
        <p>
          En conformité avec la loi Informatique et Libertés n° 78-17 du 6
          janvier 1978, les utilisateurs disposent d'un droit d'accès, de
          modification, de rectification et de suppression des données qui les
          concernent. Pour exercer ce droit, veuillez nous contacter à l'adresse
          suivante : [Votre Email].
        </p>

        <h2>Cookies</h2>
        <p>
          Ce site utilise des cookies pour améliorer l'expérience utilisateur.
          Vous pouvez choisir de désactiver les cookies à tout moment via les
          paramètres de votre navigateur.
        </p>

        <h2>Loi applicable</h2>
        <p>Les présentes mentions légales sont régies par la loi française.</p>

        <h2>Contact</h2>
        <p>
          Pour toute question concernant ces mentions légales, veuillez nous
          contacter par e-mail à [Votre Email].
        </p>
      </div>
    </div>
  )
}

export default MentionsLegales
