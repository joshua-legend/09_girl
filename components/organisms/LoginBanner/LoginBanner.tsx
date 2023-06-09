import React, { useState } from 'react'
import LoginBannerView, { LoginBannerViewProps } from '@components/organisms/LoginBanner/LoginBannerViewProps'
import LoginBannerAction, { LoginBannerActionHandlers, LoginBannerActionProps } from '@components/organisms/LoginBanner/LoginBannerAction'
export type LoginBannerProps = {}

const LoginBanner = (props: LoginBannerProps) => {
  const [isSuccess, setIsSuccess] = useState(true)

  const actionHandlers = LoginBannerAction({ setIsSuccess })
  const newProps = {
    handleLogin: actionHandlers.handleLogin,
    isSuccess,
  } as LoginBannerViewProps & LoginBannerActionHandlers
  return <LoginBannerView {...newProps} />
}

export default LoginBanner
