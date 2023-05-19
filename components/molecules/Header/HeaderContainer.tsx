import React from 'react'
import HeaderView from './HeaderView'
import HeaderAction from './HeaderAction'

const HeaderContainer = () => {
  return <HeaderView {...HeaderAction} />
}

export default HeaderContainer
