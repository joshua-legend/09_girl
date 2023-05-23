import React from 'react'
import HeaderView, { HeaderViewProps } from './HeaderView'
import HeaderAction, { HeaderActionProps } from './HeaderAction'

export type HeaderContainerProps = {} & HeaderViewProps

const HeaderContainer = ({}: HeaderContainerProps) => {
  return <HeaderView {...HeaderAction} />
}

export default HeaderContainer
