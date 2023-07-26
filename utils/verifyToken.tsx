// utils/verifyToken.ts

import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
export type CheckAuthenticationResponse = {
  success: boolean
}

export const verifyToken = async (context: GetServerSidePropsContext): Promise<boolean> => {
  const { req } = context
  console.log(req.cookies)
  const token = req.cookies.token

  try {
    const response = await axios.get<CheckAuthenticationResponse>(`${process.env.API_URL}/verifyToken`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    })
    console.log(response.data)
    return response.data.success
  } catch (error) {
    console.error('Failed to verify token', error)
    return false
  }
}
