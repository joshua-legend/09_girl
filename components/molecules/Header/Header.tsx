import React from 'react'
import HeaderView, { HeaderViewProps } from './HeaderView'

export type HeaderProps = {
  isAdmin?: boolean
  isStore?: boolean
}
const Header = (props: HeaderProps) => {
  return <HeaderView {...props} />
}

export default Header
