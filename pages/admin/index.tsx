import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React from 'react'
import axios, { AxiosResponse } from 'axios'
import PATH from '../../constants/path'

type CheckAuthenticationResponse = {
  success: boolean
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const clientCookie = context.req.headers.cookie ?? ''
  const response = await axios.get<CheckAuthenticationResponse>(`${process.env.API_URL}/checkAuthentication`, {
    headers: {
      ...(clientCookie && { Cookie: clientCookie }),
    },
    withCredentials: true,
  })

  if (!response?.data.success) {
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
  return <></>
}

export default Index
