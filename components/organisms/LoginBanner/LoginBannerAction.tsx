import React, { FormEvent, SyntheticEvent, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'

export type LoginBannerActionProps = {
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>
}

export type LoginBannerActionHandlers = {
  handleLogin: ((event: FormEvent) => void) | undefined
}

const LoginBannerAction = (props: LoginBannerActionProps): LoginBannerActionHandlers => {
  const router = useRouter()
  const handleLogin = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get('username')
    const password = formData.get('password')
    const res = await axios
      .post(
        `${process.env.API_URL}/login`,
        {
          username,
          password,
        },
        { withCredentials: true }
      )
      .catch((reason) => {
        // props.setIsSuccess(false)
      })

    if (!res) {
      props.setIsSuccess(true)
      return
    }
    res.data.success ? await router.push('/admin/1') : props.setIsSuccess(false)
  }

  return {
    handleLogin: handleLogin,
  }
}

export default LoginBannerAction
