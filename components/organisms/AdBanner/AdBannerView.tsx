import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Box as AdBanner, BoxProps, TypographyProps } from '@mui/material'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper' // 추가
import AdCard, { AdCardProps } from '@components/molecules/AdCard/AdCard'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../../constants/fonts'
import adBanner, { AdBannerProps } from '@components/organisms/AdBanner/AdBanner'

export type AdBannerViewProps = {} & AdBannerProps

const AdBannerView = ({ adCards }: AdBannerViewProps) => {
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
      slidesPerView: 1,
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
        {adCards.map((item, idx) => {
          return (
            <SwiperSlide key={idx} {...uiConfig.SwiperSlide}>
              <AdCard {...item} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </AdBanner>
  )
}

export default AdBannerView
