import type { NextPage } from 'next'
import React, { useState } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import axios from 'axios'
import { verifyToken } from '../utils/verifyToken'

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
const Abc: NextPage = ({ props }: ProcessProps) => {
  console.log(props)
  return (
    <>
      <div>abc</div>
    </>
  )
}

export default Abc
