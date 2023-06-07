import React, { useState } from 'react'
import LoginBannerView, { LoginBannerViewProps } from '@components/organisms/LoginBanner/LoginBannerViewProps'
import LoginBannerAction, { LoginBannerActionHandlers, LoginBannerActionProps } from '@components/organisms/LoginBanner/LoginBannerAction'
export type LoginBannerProps = {}

const LoginBanner = (props: LoginBannerProps) => {
  const actionHandlers = LoginBannerAction({})
  const newProps = {
    handleLogin: actionHandlers.handleLogin,
  } as LoginBannerViewProps & LoginBannerActionHandlers
  return <LoginBannerView {...newProps} />
}

export default LoginBanner
