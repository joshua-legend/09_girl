import type { NextPage } from 'next'
import IntroBanner, { IntroBannerProps } from '@components/molecules/IntroBanner/IntroBanner'
import React from 'react'
import ItemPickerBanner, { ItemPickerBannerProps } from '@components/organisms/ItemPickerBanner/ItemPickerBanner'
import AddressInputBanner from '@components/organisms/AddressInputBanner/AddressInputBanner'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import axios from 'axios/index'
//
// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
//   const response = await axios.get<any>(`${process.env.API_URL}/getItemsByStore`, {
//     withCredentials: true,
//   })
//
//   console.log(response.data)
//
//   return {
//     props: {},
//   }
// }
// type ProcessProps = {
//   props: {}
// }
const Home: NextPage = () => {
  const props = {
    introBanner: {
      storeName: '고촌점 캐파점',
    } as IntroBannerProps,
    itemPickerBanner: {
      items: [
        { name: '홈런볼', price: 3000 },
        { name: '허니버터칩', price: 2500 },
        { name: '크림빵', price: 2000 },
        { name: '초코파이', price: 2800 },
        { name: '과자봉지', price: 1500 },
        { name: '마카롱', price: 3500 },
        { name: '아이스크림', price: 2000 },
        { name: '샌드위치', price: 3200 },
      ],
    } as ItemPickerBannerProps,
  }

  return (
    <>
      <IntroBanner {...props.introBanner} />
      <ItemPickerBanner {...props.itemPickerBanner} />
      <AddressInputBanner />
    </>
  )
}

export default Home
