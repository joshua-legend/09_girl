import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as AdBanner, BoxProps, TypographyProps } from '@mui/material'
import { AdBannerActionProps } from './AdBannerAction'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper' // 추가
import AdCard, { AdCardProps } from '@components/molecules/AdCard/AdCard'
import Typography from '@mui/material/Typography'
import { FONTS } from '@styles/fonts'

export type AdBannerViewProps = {
  cards: AdCardProps[]
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
      autoplay: false,
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
      <Swiper {...uiConfig.Swiper} modules={[Pagination, Autoplay]}>
        {cards.map((card, idx) => {
          return (
            <SwiperSlide key={idx} {...uiConfig.SwiperSlide}>
              <AdCard {...card} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </AdBanner>
  )
}

export default AdBannerView
