import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import React from 'react'
import axios, { AxiosResponse } from 'axios'
import { ResType } from '../../utils/axios'
import PATH from '../../constants/path'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  await axios.get('/isLoginCheck')
  // const response: AxiosResponse<ResType> = await axios.get('http://localhost:8080/isLoginCheck', {})
  // console.log(response.data)
  // if (!response.data.success) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: PATH.ADMIN_LOGIN_PAGE,
  //     },
  //   }
  // }
  return {
    props: {},
  }
}
type ProcessProps = {
  props: {}
}
const Index: NextPage<ProcessProps> = ({ props }: ProcessProps) => {
  return (
    <>
      <div>로그인이다</div>
    </>
  )
}

export default Index
