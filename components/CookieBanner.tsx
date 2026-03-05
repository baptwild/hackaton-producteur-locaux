'use client'
import { useState, useEffect, useCallback } from 'react'

interface PiwikWindow extends Window {
  ppms?: {
    cm: {
      api: (method: string, data: object, success?: () => void) => void
    }
  }
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  const showBanner = useCallback(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)
    globalThis.addEventListener('open-cookie-settings', showBanner)

    return () => {
      clearTimeout(timer)
      globalThis.removeEventListener('open-cookie-settings', showBanner)
    }
  }, [showBanner])

  const accept = () => {
    const win = globalThis as unknown as PiwikWindow
    if (win.ppms?.cm) {
      win.ppms.cm.api(
        'setComplianceSettings',
        { consents: { analytics: { status: 1 } } },
        () => setIsVisible(false),
      )
    } else {
      setIsVisible(false)
    }
  }

  const decline = () => setIsVisible(false)

  if (!isVisible) return null

  return (
    <div className='cookie-overlay'>
      <div className='cookie-modal modal-animate'>
        <div className='cookie-content'>
          <span className='icon-large'>🍪</span>
          <h2>Respect de votre vie privée</h2>
          <p className='text-muted mb-1'>
            Nous utilisons des cookies pour analyser la fréquentation de notre
            marketplace et soutenir les producteurs en Isère.
          </p>
          <div className='cookie-actions'>
            <button className='btn btn-primary w-full mb-1' onClick={accept}>
              Accepter et continuer
            </button>
            <button className='btn-text w-full' onClick={decline}>
              Continuer sans accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
