import React, { ReactNode } from 'react'
import AdminLayoutView from '@components/layouts/AdminLayout/AdminLayoutView'
import Header from '@components/molecules/Header/Header'
import BottomAdmin from '@components/molecules/BottomAdmin/BottomAdmin'

export type AdminLayoutProps = {
  children: ReactNode
}
const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <>
      <Header isAdmin={true} />
      <AdminLayoutView>{children}</AdminLayoutView>
      <BottomAdmin />
    </>
  )
}

export default AdminLayout
