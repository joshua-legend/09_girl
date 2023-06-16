import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React from 'react'
import axios, { AxiosResponse } from 'axios'
import { ResType } from '../../utils/axios'
import PATH from '../../constants/path'

type checkAuthentication = {
  isAuthenticated: boolean
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const response: AxiosResponse<checkAuthentication> = await axios.get(`${process.env.API_URL}/checkAuthentication`)
  if (!response.data.isAuthenticated) {
    return {
      redirect: {
        permanent: false,
        destination: PATH.ADMIN_LOGIN_PAGE,
      },
    }
  }
  return {
    props: {},
  }
}
type ProcessProps = {
  props: {}
}
const Index: NextPage<ProcessProps> = ({ props }: ProcessProps) => {
  const handleLogin = async (e) => {
    axios
      .get(`${process.env.API_URL}/checkAuthentication`)
      .then((response: AxiosResponse<ResType>) => {
        console.log(response.data)
        if (response.data.success) {
        } else {
        }
      })
      .catch((reason) => {})
  }
  return (
    <>
      <button onClick={handleLogin}>로그인이다</button>
    </>
  )
}

export default Index
