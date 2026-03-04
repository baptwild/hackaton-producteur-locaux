import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactez-nous - Les Voisins de Panier',
  description:
    "Une question ? Un partenariat ? Contactez l'équipe des Voisins de Panier, votre marketplace locale à Grenoble.",
}

export default function Contact() {
  return (
    <div className='container section-padding'>
      <h1>Contactez-nous</h1>
      <p className='text-muted mb-2'>Nous vous répondons sous 24h.</p>
      <section className='card' style={{ maxWidth: '600px' }}>
        <p>📧 Email : contact@lesvoisinsdepanier.fr</p>
        <p>
          📍 Bureau : ESGI - Campus Eductive Grenoble, 6 rue Irvoy, 38000
          Grenoble
        </p>
      </section>
    </div>
  )
}
