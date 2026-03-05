'use client'

import { DataLayer } from '@/types/dataLayer'

interface ContactButtonProps {
  readonly producerName: string
}

export default function ContactButton({ producerName }: ContactButtonProps) {
  const dataLayer = () => {
    const win = globalThis as unknown as DataLayer
    if (win.dataLayer) {
      win.dataLayer.push({
        event: 'click_contact_producteur',
        producer_name: producerName,
      })
      console.log('Contact tracked for:', producerName)
      alert('Demande envoyée au producteur !')
    }
  }

  return (
    <button className='btn btn-primary w-full mt-1' onClick={dataLayer}>
      Envoyer un message
    </button>
  )
}
