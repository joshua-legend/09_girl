import React, { ReactNode } from 'react'
import Header from '../../molecules/Header/Header'
import DefaultLayoutView from '@components/layouts/DefaultLayout/DefaultLayoutView'
import BottomTotalBar from '@components/molecules/BottomTotalBar/BottomTotalBar'

export type DefaultLayoutProps = {
  children: ReactNode
}
const TestLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <div>123123213</div>
      <DefaultLayoutView>{children}</DefaultLayoutView>
      <div>asdadadasdsad</div>
    </>
  )
}

export default TestLayout
