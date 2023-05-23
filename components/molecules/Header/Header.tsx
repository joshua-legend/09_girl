import React from 'react'
import HeaderContainer, { HeaderContainerProps } from './HeaderContainer'

export type HeaderProps = {} & HeaderContainerProps
const Header = ({}: HeaderProps) => {
  return <HeaderContainer />
}

export default Header
