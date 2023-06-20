import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import axios from 'axios'
import IntroBanner, { IntroBannerProps } from '@components/molecules/IntroBanner/IntroBanner'
import ItemPickerBanner, { ItemPickerBannerProps } from '@components/organisms/ItemPickerBanner/ItemPickerBanner'
import AddressInputBanner from '@components/organisms/AddressInputBanner/AddressInputBanner'
import React from 'react'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { id } = context.query
  const response = await axios.get(`${process.env.API_URL}/getItemsByStore/${id}`, {
    withCredentials: true,
  })

  return {
    props: {
      ...response.data.data,
    },
  }
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
