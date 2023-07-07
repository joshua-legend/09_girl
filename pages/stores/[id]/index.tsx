import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next'
import axios from 'axios'
import IntroBanner, { IntroBannerProps } from '@components/molecules/IntroBanner/IntroBanner'
import ItemPickerBanner, { ItemPickerBannerProps } from '@components/organisms/ItemPickerBanner/ItemPickerBanner'
import AddressInputBanner, { AddressInputBannerProps } from '@components/organisms/AddressInputBanner/AddressInputBanner'
import React, { useEffect } from 'react'
import { verifyToken } from '../../../utils/verifyToken'
import { requestData } from '../../../utils/requestData'
import jwt from 'jsonwebtoken'
import test from 'node:test'
import BuyStore from '../../../store/BuyStore'
import { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'
import BottomTotalBar from '@components/molecules/BottomTotalBar/BottomTotalBar'
import AddressStore from '../../../store/AddressStore'
import Snackbar from '@components/atoms/Snackbar/Snackbar'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> => {
  const isTokenValid = await verifyToken(context)
  if (!isTokenValid) {
    return { redirect: { destination: '/', permanent: false } }
  }
  const getData = await requestData('getItemsByStore', context)
  const JWT_SECRET = process.env.JWT_SECRET
  const token = context.req.cookies.token
  const payload = await jwt.verify(token, JWT_SECRET)
  const data = { props: { ...getData, payload } }
  return data
}

type ProcessProps = {
  storeName?: IntroBannerProps
  items?: ItemCounterProps[]
  payload?: any
}

const Index: NextPage<ProcessProps> = ({ storeName, items, payload }: ProcessProps) => {
  const { setItems } = BuyStore()
  useEffect(() => {
    if (items) {
      const itemsWithQuantity = items.map((item) => ({
        ...item,
        quantity: 0,
      }))
      setItems(itemsWithQuantity)
    }
  }, [items, setItems])

  const { setAddress, addressInfo } = AddressStore()
  useEffect(() => {
    const { mobile, nickname, require, address, detail, common } = payload
    const mobileReg = mobile.replace(/-/g, '')
    setAddress({ mobile: mobileReg, nickname, require, address, detail, common })
  }, [payload])

  const data = {
    introBanner: {
      storeName,
    } as IntroBannerProps,
    addInputBanner: {
      mobile: payload.mobile.replace(/-/g, ''),
      nickname: payload.nickname,
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
