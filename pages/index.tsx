import type { NextPage } from 'next'
import React from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  }
}
type ProcessProps = {
  props: {}
}
const Home: NextPage = () => {
  const props = {}

  return (
    <>
      <div>전화번호넣기</div>
    </>
  )
}

export default Home
