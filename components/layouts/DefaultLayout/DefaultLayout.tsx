import React from 'react'
import DefaultLayoutContainer from './DefaultLayoutContainer'
import { checkServerIdentity } from 'tls'
import Header from '../../molecules/Header/Header'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <DefaultLayoutContainer>{children}</DefaultLayoutContainer>
    </>
  )
}

export default DefaultLayout
