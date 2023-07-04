import React from 'react'
import { Box, Card, CardContent, CardMedia, CardMediaProps, CardProps, Chip, Typography as Title, Typography as SubTitle, TypographyProps } from '@mui/material'
import { COLORS } from '../../../constants/colors'
import { AdCardProps } from '@components/molecules/AdCard/AdCard'
import { SNSLoginsProps } from '@components/molecules/SNSLogins/SNSLogins'
import { mockSession } from 'next-auth/client/__tests__/helpers/mocks'
import image = mockSession.user.image

export type SNSLoginsViewProps = {} & SNSLoginsProps

const SNSLoginsView = ({}: SNSLoginsViewProps) => {
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

export default SNSLoginsView
