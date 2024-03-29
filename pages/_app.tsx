import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { CssBaseline } from '@mui/material'
import DefaultLayout from '../components/layouts/DefaultLayout/DefaultLayout'
import '../public/fonts/style.css'
import AdminLayout from '@components/layouts/AdminLayout/AdminLayout'
import LoginLayout from '@components/layouts/LoginLayout/LoginLayout'
import UserLayout from '@components/layouts/UserLayout/UserLayout'

const MyApp = ({ pageProps, router, Component }: AppProps) => {
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

  const routerPath = router.asPath.split('/')[1] || 'default' // default
  const layouts = {
    404: DefaultLayout,
    select: DefaultLayout,
    default: DefaultLayout,
    done: DefaultLayout,
    admin: DefaultLayout,
    stores: UserLayout,
    login: LoginLayout,
  }

  // const Layout = layouts[routerPath] || layouts.default
  const Layout = layouts[routerPath as keyof typeof layouts] || layouts.default
  const AnyComponent = Component as any
  return (
    <>
      <Layout>
        <CssBaseline />
        <AnyComponent {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
