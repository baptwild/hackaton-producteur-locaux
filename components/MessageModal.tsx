'use client'

interface MessageModalProps {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly producerName: string
}

export default function MessageModal({
  isOpen,
  onClose,
  producerName,
}: MessageModalProps) {
  if (!isOpen) return null

  return (
    <div className='cookie-overlay' onClick={onClose}>
      <div
        className='cookie-modal modal-animate'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='cookie-content'>
          <span className='icon-large'>📩</span>
          <h2 className='modal-success-title'>Message envoyé !</h2>
          <p className='text-muted mb-2'>
            Votre demande de contact pour <strong>{producerName}</strong> a bien
            été transmise. Le producteur vous répondra directement sur votre
            adresse email.
          </p>
          <div className='cookie-actions'>
            <button
              className='btn btn-primary w-full'
              onClick={onClose}
              type='button'
            >
              Super, merci !
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
