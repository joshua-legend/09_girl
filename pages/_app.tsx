import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { CssBaseline } from '@mui/material'
import DefaultLayout from '../components/layouts/DefaultLayout/DefaultLayout'
import '../public/fonts/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const setViewport = () => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const viewportContent = isMobile ? 'width=device-width, initial-scale=1' : 'width=1024'
      const viewport = document.querySelector('meta[name="viewport"]')
      if (viewport) {
        viewport.setAttribute('content', viewportContent)
      }
    }
    setViewport()
    window.addEventListener('resize', setViewport)
    return () => {
      window.removeEventListener('resize', setViewport)
    }
  }, [])

  return (
    <DefaultLayout>
      <CssBaseline />
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
