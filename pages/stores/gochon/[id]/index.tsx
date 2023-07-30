import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next'
import axios from 'axios'
import IntroBanner, { IntroBannerProps } from '@components/molecules/IntroBanner/IntroBanner'
import ItemPickerBanner, { ItemPickerBannerProps } from '@components/organisms/ItemPickerBanner/ItemPickerBanner'
import AddressInputBanner, { AddressInputBannerProps } from '@components/organisms/AddressInputBanner/AddressInputBanner'
import React, { useEffect, useState } from 'react'
import { verifyToken } from '../../../../utils/verifyToken'
import { requestData } from '../../../../utils/requestData'
import jwt from 'jsonwebtoken'
import BuyStore from '../../../../store/BuyStore'
import { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'
import BottomTotalBar from '@components/molecules/BottomTotalBar/BottomTotalBar'
import AddressStore from '../../../../store/AddressStore'
import Snackbar from '@components/atoms/Snackbar/Snackbar'
import { redirectIfError } from '../../../../utils/redirects'
import { isDateExpired } from '../../../../utils/isDateExpired'
import { useRouter } from 'next/router'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> => {
  // const isTokenValid = await verifyToken(context)
  // if (!isTokenValid) {
  //   const redirectUrl = encodeURIComponent(context.req.url as string)
  //   return { redirect: { destination: `/?redirectUrl=${redirectUrl}`, permanent: false } }
  // }
  const getData = await requestData('getItemsByStore', context)
  if (!isDateExpired(getData.items.endDay)) {
    return redirectIfError()
  }
  const JWT_SECRET = process.env.JWT_SECRET
  if (!JWT_SECRET) {
    throw new Error('Missing JWT_SECRET environment variable')
  }
  const data = { props: { title: getData.items.title, items: getData.items.items } }
  return data
}

type ProcessProps = {
  title: IntroBannerProps
  items?: ItemCounterProps[]
}

const Index: NextPage<ProcessProps> = ({ title, items }: ProcessProps) => {
  const { setItems } = BuyStore()
  const { push } = useRouter()

  useEffect(() => {
    const data = localStorage.getItem('09_girl_token_id')
    if (!data) push('/')
  }, [])

  useEffect(() => {
    if (items) {
      const itemsWithQuantity = items.map((item) => ({
        ...item,
        quantity: 0,
      }))
      setItems(itemsWithQuantity)
    }
  }, [items, setItems])

  const { setAddress } = AddressStore()
  const [payload, setPayload] = useState({ mobile: '' })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const naverId = localStorage.getItem('09_girl_token_id')
        const response = await axios.get(`${process.env.API_URL}/auth/naver/profile/${naverId}`, {
          withCredentials: true,
        })
        const { mobile, nickname, require, address, detail, common, id } = response.data.payload
        const dataPayload = response.data.payload
        const mobileReg = dataPayload.mobile.replace(/-/g, '')
        dataPayload.mobile = mobileReg
        setPayload(dataPayload)
        setAddress({ mobile: mobileReg, id, nickname, require, address, detail, common })
      } catch (error) {
        console.error('Failed to fetch receipt:', error)
      }
    }
    fetchData()
  }, [])

  const data = {
    introBanner: {
      title,
    } as IntroBannerProps,
    addInputBanner: {
      // mobile: payload.mobile,
      // nickname: payload.nickname,
    } as AddressInputBannerProps,
  }

  return (
    <>
      <IntroBanner {...data.introBanner} />
      <ItemPickerBanner />
      <AddressInputBanner {...data.addInputBanner} />
      <BottomTotalBar />
      <Snackbar />
    </>
  )
}

export default Index
