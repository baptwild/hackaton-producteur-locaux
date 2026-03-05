'use client'

import { useState } from 'react'
import { DataLayer } from '@/types/dataLayer'
import MessageModal from './MessageModal'

interface ContactButtonProps {
  readonly producerName: string
}

export default function ContactButton({ producerName }: ContactButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleContact = () => {
    const win = globalThis as unknown as DataLayer
    if (win.dataLayer) {
      win.dataLayer.push({
        event: 'click_contact_producteur',
        producer_name: producerName,
      })
      console.log('Contact tracked for:', producerName)
    }
    setIsModalOpen(true)
  }

  return (
    <>
      <button className='btn btn-primary w-full mt-1' onClick={handleContact}>
        Envoyer un message
      </button>

      <MessageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        producerName={producerName}
      />
    </>
  )
}
