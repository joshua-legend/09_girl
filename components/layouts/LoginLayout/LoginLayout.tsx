import React, { ReactNode } from 'react'
import AdminLayoutView from '@components/layouts/AdminLayout/AdminLayoutView'
import Header from '@components/molecules/Header/Header'
import BottomAdmin from '@components/molecules/BottomAdmin/BottomAdmin'
import LoginLayoutView from '@components/layouts/LoginLayout/LoginLayoutView'

export type LoginLayoutProps = {
  children: ReactNode
}
const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <>
      <Header />
      <LoginLayoutView>{children}</LoginLayoutView>
    </>
  )
}

export default LoginLayout
