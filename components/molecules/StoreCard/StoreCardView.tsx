import React from 'react'
import { Box, Card, CardMedia, CardMediaProps, CardProps, Typography as Title, TypographyProps } from '@mui/material'
import { StoreCardProps } from '@components/molecules/StoreCard/StoreCard'
import { FONTS } from '../../../constants/fonts'
import { useRouter } from 'next/router'

export type StoreCardViewProps = {} & StoreCardProps

const StoreCardView = ({ image = '/static/alt.jpg', title = '문구를 넣어주세요.', location }: StoreCardViewProps) => {
  const { push } = useRouter()

  const uiConfig = {
    Box: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '300px',
        margin: '1rem 0',
        background: 'rgb(255, 255, 255)',
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 2px',
        borderRadius: '10px',
      },
      onClick: () => {
        push(`/stores/${location}`)
      },
    },
    Card: {
      sx: {
        flex: '3.5',
        width: '100%',
        borderTopRightRadius: '10px',
        borderTopLeftRadius: '10px',
      },
      variant: 'elevation',
    } as CardProps,
    CardMedia: {
      style: {
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
      },
      component: 'img',
      height: '100%',
      image,
      alt: 'static/alt.jpg',
    } as CardMediaProps,
    Title: {
      component: 'div',
      sx: {
        flex: '1',
        display: 'flex',
        width: '100%',
        fontFamily: FONTS.PRETENDARD,
        fontSize: '17px',
        lineHeight: '115%',
        fontWeight: '700',
        letterSpacing: '-0.2px',
        color: 'rgb(88, 89, 91)',
      },
    } as TypographyProps,
    Sub: {
      component: 'div',
      sx: {
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        fontFamily: FONTS.PRETENDARD,
        fontSize: '14px',
        lineHeight: '115%',
        fontWeight: '400',
        letterSpacing: '-0.2px',
        color: 'rgb(88, 89, 91)',
      },
    } as TypographyProps,
  }

  return (
    <Box {...uiConfig.Box}>
      <Card {...uiConfig.Card}>
        <CardMedia {...uiConfig.CardMedia} />
      </Card>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1', padding: '15px' }}>
        <Title {...uiConfig.Title}>{title}</Title>
        <Title {...uiConfig.Sub}>김포시 고촌읍 수기로 136 캐파2단지 상가 502-2동 201호</Title>
      </Box>
    </Box>
  )
}

export default StoreCardView
