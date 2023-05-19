import React from 'react'
import { DefaultLayoutActionProps } from './DefaultLayoutAction'

type ButtonViewProps = {} & DefaultLayoutActionProps

const centerLayoutStyle = {
  display: 'flex',
  justifyContent: 'center',
  minHeight: '100vh',
}

const DefaultLayoutView = ({ children }: ButtonViewProps) => {
  return (
    <>
      <main style={centerLayoutStyle}>{children}</main>
    </>
  )
}

export default DefaultLayoutView
