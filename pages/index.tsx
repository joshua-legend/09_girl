import type { NextPage } from 'next'
import IntroBanner, { IntroBannerProps } from '@components/molecules/IntroBanner/IntroBanner'
import AdBanner, { AdBannerProps } from '@components/organisms/AdBanner/AdBanner'
import { IMAGES } from '@styles/images'
import React from 'react'
import ItemPickerBanner, { ItemPickerBannerProps } from '@components/organisms/ItemPickerBanner/ItemPickerBanner'

const Home: NextPage = () => {
  const props = {
    introBanner: {
      storeName: '고촌점 캐파점',
    } as IntroBannerProps,

    adBanner: {
      cards: [{ card: { image: IMAGES.TEST1, title: '40년 정통 맛집, 무침회', subtitle: '납작만두 추가 원하시는분들 많아서 추가!' } }, { card: { image: IMAGES.TEST2, title: '패션후르츠청', subtitle: '인공색소, 인공향료, 보존료 3무 첨가로 건강하게!!' } }, { card: { image: IMAGES.TEST3 } }],
    } as AdBannerProps,
    itemPickerBanner: {
      items: [{ item: { name: '홈런볼', price: 3000 } }, { item: { name: '허니버터칩', price: 2500 } }, { item: { name: '크림빵', price: 2000 } }, { item: { name: '초코파이', price: 2800 } }, { item: { name: '과자봉지', price: 1500 } }, { item: { name: '마카롱', price: 3500 } }, { item: { name: '아이스크림', price: 2000 } }, { item: { name: '샌드위치', price: 3200 } }],
    } as ItemPickerBannerProps,
  }

  return (
    <>
      <IntroBanner {...props} />
      <AdBanner {...props} />
      <ItemPickerBanner {...props} />
    </>
  )
}

export default Home
