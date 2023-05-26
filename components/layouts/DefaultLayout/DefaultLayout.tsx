import React, { ReactNode } from 'react'
import Header from '../../molecules/Header/Header'
import DefaultLayoutView from '@components/layouts/DefaultLayout/DefaultLayoutView'

export type DefaultLayoutProps = {
  children: ReactNode
}
const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Header />
      <DefaultLayoutView>{children}</DefaultLayoutView>
    </>
  )
}

export default DefaultLayout
