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
        position: 'relative',
        width: '100%',
        height: '200px',
        margin: '1rem 0',
      },
      onClick: () => {
        console.log('고고')
        push(`/stores/${location}`)
      },
    },
    Card: {
      sx: {
        width: '100%',
        height: '100%',
      },
      variant: 'elevation',
    } as CardProps,
    CardMedia: {
      style: {
        width: '100%',
        borderRadius: '10px',
        objectFit: 'cover',
        objectPosition: 'center',
      },
      component: 'img',
      height: '100%',
      image,
      alt: 'static/alt.jpg',
    } as CardMediaProps,
    Title: {
      component: 'h1',
      sx: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontFamily: FONTS.BANNER,
        fontSize: '40px',
        lineHeight: '1.5',
        letterSpacing: '1px',
      },
    } as TypographyProps,
  }

  return (
    <Box {...uiConfig.Box}>
      <Card {...uiConfig.Card}>
        <CardMedia {...uiConfig.CardMedia} />
      </Card>
      <Title {...uiConfig.Title}>{title}</Title>
    </Box>
  )
}

export default StoreCardView
