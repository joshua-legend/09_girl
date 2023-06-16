import React, { SyntheticEvent, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { ResType } from '../../../utils/axios'
import { useRouter } from 'next/router'

export type LoginBannerActionProps = {
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

export type LoginBannerActionHandlers = {
  handleLogin: ((event: SyntheticEvent) => void) | undefined
}

const LoginBannerAction = (props: LoginBannerActionProps): LoginBannerActionHandlers => {
  const router = useRouter()
  const handleLogin = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get('username')
    const password = formData.get('password')
    axios
      .post('http://localhost:8080/login', {
        username,
        password,
      })
      .then((response: AxiosResponse<ResType>) => {
        if (response.data.success) {
          // router.push('/admin')
          console.log(response.data)
        } else {
          props.setIsSuccess(false)
        }
      })
      .catch((reason) => {
        props.setIsSuccess(false)
      })
  }

  return {
    handleLogin: handleLogin,
  }
}

export default LoginBannerAction
