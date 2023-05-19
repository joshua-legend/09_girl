import React from 'react'
import DefaultLayoutView from './DefaultLayoutView'
import DefaultLayoutAction from './DefaultLayoutAction'

const DefaultLayoutContainer = ({ children }) => {
  return (
    <>
      <DefaultLayoutView {...DefaultLayoutAction}>{children}</DefaultLayoutView>
    </>
  )
}

export default DefaultLayoutContainer
