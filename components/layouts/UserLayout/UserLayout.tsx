import React, { ReactNode } from 'react'
import Header from '../../molecules/Header/Header'
import DefaultLayoutView from '@components/layouts/DefaultLayout/DefaultLayoutView'
import BottomTotalBar from '@components/molecules/BottomTotalBar/BottomTotalBar'
import UserLayoutView from '@components/layouts/UserLayout/UserLayoutView'

export type UserLayoutProps = {
  children: ReactNode
}
const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <Header isStore={true} />
      <UserLayoutView>{children}</UserLayoutView>
      {/*<BottomTotalBar />*/}
    </>
  )
}

export default UserLayout
