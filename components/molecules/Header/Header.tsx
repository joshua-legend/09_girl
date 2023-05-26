import React from 'react'
import HeaderView, { HeaderViewProps } from './HeaderView'

export type HeaderProps = {}
const Header = (props: HeaderProps) => {
  return <HeaderView {...props} />
}

export default Header
