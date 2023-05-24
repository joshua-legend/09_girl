import React from 'react'
import HeaderView, { HeaderViewProps } from './HeaderView'
import HeaderAction, { HeaderActionProps } from './HeaderAction'

export type HeaderProps = {
  head: HeaderViewProps
}
const Header = ({ head }: HeaderProps) => {
  return <HeaderView {...HeaderAction} {...head} />
}

export default Header
