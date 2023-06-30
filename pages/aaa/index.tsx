import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {},
  }
}
type ProcessProps = {
  props: {}
}
const Index: NextPage = ({}: ProcessProps) => {
  return (
    <>
      <div>통과</div>
    </>
  )
}

export default Index
