'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

export default function ContactFormStatus() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const t = useTranslations('contact')
  const [show, setShow] = useState(false)

  const success = searchParams.get('success')
  const error = searchParams.get('error')

  useEffect(() => {
    if (success || error) {
      setShow(true)
    }
  }, [success, error])

  const handleClose = () => {
    setShow(false)
    // Remove the query params from URL
    router.replace(window.location.pathname)
  }

  if (!show) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        {/* Modal */}
        <div 
          className="bg-white rounded-2xl border border-border p-8 shadow-xl max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {success && (
            <div className="text-center space-y-4">
              {/* Success Icon */}
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="font-display font-semibold text-3xl text-primary">
                {t('success.title')}
              </h2>
              
              <p className="text-primary/80">
                {t('success.message')}
              </p>

              <button
                onClick={handleClose}
                className="w-full mt-4 px-6 py-3 rounded-full bg-primary text-white font-medium hover:opacity-90 transition-opacity"
              >
                {t('success.close')}
              </button>
            </div>
          )}

          {error && (
            <div className="text-center space-y-4">
              {/* Error Icon */}
              <div className="mx-auto w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <h2 className="font-display font-semibold text-3xl text-primary">
                {t('error.title')}
              </h2>
              
              <p className="text-primary/80">
                {t('error.message')}
              </p>

              <button
                onClick={handleClose}
                className="w-full mt-4 px-6 py-3 rounded-full bg-primary text-white font-medium hover:opacity-90 transition-opacity"
              >
                {t('error.close')}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
