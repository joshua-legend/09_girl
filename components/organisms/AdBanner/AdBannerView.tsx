import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as AdBanner, BoxProps, TypographyProps } from '@mui/material'
import { AdBannerActionProps } from './AdBannerAction'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper' // 추가
import Card, { CardProps } from '@components/molecules/Card/Card'
import Typography from '@mui/material/Typography'
import { FONTS } from '@styles/fonts'

export type AdBannerViewProps = {
  cards: CardProps[]
}

const AdBannerView = ({ cards }: AdBannerViewProps & AdBannerActionProps) => {
  const uiConfig = {
    AdBanner: {
      sx: {
        height: '320px',
        width: '100%',
      },
    } as BoxProps,
    Title: {
      sx: {
        position: 'absolute',
        paddingLeft: '20px',
        fontFamily: FONTS.TITLE,
        fontSize: '18px',
        fontWeight: '500',
      },
    } as TypographyProps,
    Swiper: {
      className: 'mySwiper',
      style: {
        height: '100%',
        width: '100%',
      },
      slidesPerView: 'auto',
      centeredSlides: true,
      pagination: {
        clickable: true,
      },
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
      <Typography {...uiConfig.Title}>Hurry! Event now!</Typography>
      <Swiper {...uiConfig.Swiper} modules={[Pagination]}>
        {cards.map((card, idx) => {
          return (
            <SwiperSlide key={idx} {...uiConfig.SwiperSlide}>
              <Card {...card} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </AdBanner>
  )
}

export default AdBannerView
