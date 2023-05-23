import React from 'react'
import { Box as Left, Box as Right, Box as AdBanner, BoxProps } from '@mui/material'
import { AdBannerActionProps } from './AdBannerAction'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css'
import Card, { CardProps } from '@components/molecules/Card/Card'

export type AdBannerViewProps = {
  cards: CardProps[]
} & AdBannerActionProps

const AdBannerView = ({ cards }: AdBannerViewProps) => {
  const uiConfig = {
    AdBanner: {
      sx: {
        height: '320px',
        width: '100%',
      },
    } as BoxProps,
    Swiper: {
      className: 'mySwiper',
      style: {
        height: '100%',
        width: '100%',
      },
      slidesPerView: 1,
    },
    SwiperSlide: {
      style: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
  }
  return (
    <AdBanner {...uiConfig.AdBanner}>
      <Swiper {...uiConfig.Swiper}>
        {cards.map((value, idx) => {
          return (
            <SwiperSlide key={idx} {...uiConfig.SwiperSlide}>
              <Card {...value} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </AdBanner>
  )
}

export default AdBannerView
