// utils/requestData.ts

import axios from 'axios'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { handleError } from './handleError'

export const requestData = async (url: string, context: GetServerSidePropsContext, params?: object) => {
  const { id } = context.query
  try {
    const response = await axios.get(`${process.env.API_URL}/${url}/${id}`, {
      withCredentials: true,
      params,
    })
    return {
      ...response.data.data,
    }
  } catch (error) {
    return handleError(error)
  }
}
