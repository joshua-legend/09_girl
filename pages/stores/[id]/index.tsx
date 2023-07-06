import type { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, NextPage } from 'next'
import axios from 'axios'
import IntroBanner, { IntroBannerProps } from '@components/molecules/IntroBanner/IntroBanner'
import ItemPickerBanner, { ItemPickerBannerProps } from '@components/organisms/ItemPickerBanner/ItemPickerBanner'
import AddressInputBanner from '@components/organisms/AddressInputBanner/AddressInputBanner'
import React from 'react'
import { verifyToken } from '../../../utils/verifyToken'
import { requestData } from '../../../utils/requestData'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> => {
  const isTokenValid = await verifyToken(context)
  if (!isTokenValid) {
    return { redirect: { destination: '/', permanent: false } }
  }
  return await requestData('getItemsByStore', context)
}

type ProcessProps = {
  storeName?: IntroBannerProps
  items?: ItemPickerBannerProps
}

const Index: NextPage<ProcessProps> = (props: ProcessProps) => {
  const data = {
    introBanner: {
      storeName: props.storeName,
    } as IntroBannerProps,
    itemPickerBanner: {
      items: props.items,
    } as ItemPickerBannerProps,
  }
  return (
    <>
      <IntroBanner {...data.introBanner} />
      <ItemPickerBanner {...data.itemPickerBanner} />
      <AddressInputBanner />
    </>
  )
}

export default Index
