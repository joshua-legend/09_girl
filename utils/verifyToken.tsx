// utils/verifyToken.ts

import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
export type CheckAuthenticationResponse = {
  success: boolean
}

export const verifyToken = async (context: GetServerSidePropsContext): Promise<boolean> => {
  const { req } = context
  const token = req.cookies.token
  console.log('token', token)
  try {
    const response = await axios.get<CheckAuthenticationResponse>(`${process.env.API_URL}/verifyToken`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    })
    return response.data.success
  } catch (error) {
    console.error('Failed to verify token', error)
    return false
  }
}
