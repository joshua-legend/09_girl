import React from 'react'
import LoginButtonView from '@components/atoms/LoginButton/LoginButtonView'

export type LoginButtonProps = {
  sns: string
  href: string
  bgColor: string
  logo: string
  color?: string
}

const LoginButton = (props: LoginButtonProps) => {
  return <LoginButtonView {...props} />
}

export default LoginButton
