import React, { SyntheticEvent, useState } from 'react'
import { LoginBannerProps } from '@components/organisms/LoginBanner/LoginBanner'
import axios from 'axios'

export type LoginBannerActionProps = {}

export type LoginBannerActionHandlers = {
  handleLogin: ((event: SyntheticEvent) => void) | undefined
}

const LoginBannerAction = (props: LoginBannerProps): LoginBannerActionHandlers => {
  const handleLogin = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get('username')
    const password = formData.get('password')
    try {
      const response = await axios.post('/login', {
        username,
        password,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return {
    handleLogin: handleLogin,
  }
}

export default LoginBannerAction
