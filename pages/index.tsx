import type { NextPage } from 'next'
import React, { useState } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import Footer from '@components/atoms/Footer/Footer'
import MainPanel from '@components/atoms/MainPanel/MainPanel'
import SNSLogins from '@components/molecules/SNSLogins/SNSLogins'
import { verifyToken } from '../utils/verifyToken'
import NaverLogin from '@components/atoms/NaverLogin/NaverLogin'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  // const isTokenValid = await verifyToken(context)
  // if (isTokenValid) {
  //   return { redirect: { destination: '/404', permanent: false } }
  // }
  return {
    props: {},
  }
}
type ProcessProps = {
  props: {}
}
const Home: NextPage = () => {
  return (
    <>
      <MainPanel />
      <SNSLogins />
      <Footer />
    </>
  )
}

export default Home
