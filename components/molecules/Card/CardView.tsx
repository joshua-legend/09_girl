import React from 'react'
import { Box, Card, CardContent, CardMedia, CardMediaProps, CardProps, Chip, Typography as Title, Typography as SubTitle, TypographyProps } from '@mui/material'
import { CardActionProps } from './CardAction'
import { COLORS } from '@styles/colors'

export type CardViewProps = {
  card: {
    image?: string
    title?: string
    subtitle?: string
  }
}

const CardView = ({ card }: CardViewProps & CardActionProps) => {
  console.log(card.image == '/static/test2.jpg')
  const { image = 'static/test1.jpg', title = '문구를 넣어주세요.', subtitle = '문구를 넣어주세요.' } = card
  const uiConfig = {
    Box: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
    Card: {
      sx: {
        width: '290px',
        height: '190px',
      },
      variant: 'elevation',
    } as CardProps,
    CardMedia: {
      style: {
        width: '100%',
      },
      component: 'img',
      height: '100%',
      image: card.image,
      alt: 'static/alt.jpg',
    } as CardMediaProps,
    Title: {
      component: 'h2',
      sx: {
        marginTop: '1rem',
        textAlign: 'center',
        fontFamily: 'Pretendard-Regular',
        fontSize: '18px',
        fontWeight: '700',
      },
    } as TypographyProps,
    SubTitle: {
      component: 'h4',
      sx: {
        textAlign: 'center',
        marginTop: '6px',
        fontFamily: 'Pretendard-Regular',
        fontSize: '13px',
        fontWeight: '500',
        lineHeight: '1.15',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: COLORS.TEXT,
      },
    } as TypographyProps,
  }

  return (
    <Box {...uiConfig.Box}>
      <Card {...uiConfig.Card}>
        <CardMedia {...uiConfig.CardMedia} />
      </Card>
      <Title {...uiConfig.Title}>{title}</Title>
      <SubTitle {...uiConfig.SubTitle}>{subtitle}</SubTitle>
    </Box>
  )
}

export default CardView
