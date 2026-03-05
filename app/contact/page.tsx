import Breadcrumb from '@/components/Breadcrumb'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactez-nous - Les Voisins de Panier',
  description:
    "Une question ? Un partenariat ? Contactez l'équipe des Voisins de Panier, votre marketplace locale à Grenoble.",
}

export default function Contact() {
  return (
    <div className='container section-padding'>
      <Breadcrumb steps={[{ label: 'Contact' }]} />
      <header className='page-header'>
        <span className='badge'>Contact</span>
        <h1>Parlons de circuit court</h1>
        <p className='text-muted large'>
          Une question, un partenariat ou une suggestion ? Notre équipe
          grenobloise vous écoute.
        </p>
      </header>

      <div className='contact-grid'>
        <aside className='contact-info-card'>
          <h3>Nos coordonnées</h3>
          <div className='contact-info-list'>
            <div className='info-item mt-2'>
              <span className='info-icon'>📧</span>
              <div className='info-content'>
                <label>Email professionnel</label>
                <span>contact@lesvoisinsdepanier.fr</span>
              </div>
            </div>
            <div className='info-item mt-1'>
              <span className='info-icon'>📍</span>
              <div className='info-content'>
                <label>Siège Social</label>
                <span>6 rue Irvoy, 38000 Grenoble</span>
              </div>
            </div>
          </div>
        </aside>

        <section className='form-card'>
          <form>
            <div className='form-group'>
              <label>Votre nom</label>
              <input
                type='text'
                className='form-control'
                placeholder='Jean Dupont'
              />
            </div>
            <div className='form-group'>
              <label>Votre adresse email</label>
              <input
                type='email'
                className='form-control'
                placeholder='jean@email.com'
              />
            </div>
            <div className='form-group'>
              <label>Sujet</label>
              <select className='form-control'>
                <option>Question sur un producteur</option>
                <option>Devenir partenaire</option>
                <option>Signaler un problème</option>
                <option>Autre</option>
              </select>
            </div>
            <div className='form-group'>
              <label>Message</label>
              <textarea
                className='form-control'
                rows={5}
                placeholder='Dites-nous tout...'
              ></textarea>
            </div>
            <button type='button' className='btn btn-primary w-full'>
              Envoyer mon message
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
