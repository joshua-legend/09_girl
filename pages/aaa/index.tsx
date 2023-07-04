import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import jwt from 'jsonwebtoken'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req } = context

  // Get the token from the request headers
  const token = req.headers.authorization?.split(' ')[1]
  console.log(token)
  if (!token) {
    // No token - user is not authenticated
    return { props: { user: null } }
  }

  try {
    // Verify the token
    const payload = jwt.verify(token, 'jwtSecret')

    // User is authenticated - pass the user info to the page
    return { props: { user: payload } }
  } catch (error) {
    // Token is invalid - user is not authenticated
    return { props: { user: null } }
  }
  return {
    props: {},
  }
}
type ProcessProps = {
  props: {
    user: any
  }
}
const Index: NextPage = ({ props }: ProcessProps) => {
  console.log(props.user)
  return (
    <>
      <div>통과</div>
    </>
  )
}

export default Index
