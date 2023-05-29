import React from 'react'
import { Box, Card, CardContent, CardMedia, CardMediaProps, CardProps, Chip, Typography as Title, Typography as SubTitle, TypographyProps } from '@mui/material'
import { COLORS } from '@styles/colors'
import { AdCardProps } from '@components/molecules/AdCard/AdCard'

export type AdCardViewProps = {} & AdCardProps

const AdCardView = ({ image = '/static/alt.jpg', title = '문구를 넣어주세요.', subtitle = '소문구를 넣어주세요.' }: AdCardViewProps) => {
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
      image,
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

export default AdCardView