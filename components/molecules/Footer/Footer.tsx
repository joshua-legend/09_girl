import React, { useState } from 'react'
import FooterView from './FooterView'
import FooterAction from '@components/molecules/Footer/FooterAction'

export type FooterProps = {}
const Footer = (props: FooterProps) => {
  const [store, setStore] = useState(0)

  const actions = FooterAction({ setStore })

  const newProps = {}

  return <FooterView {...props} />
}

export default Footer
