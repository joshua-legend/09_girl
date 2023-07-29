import React from 'react'
import { Box, Card, CardContent, CardMedia, CardMediaProps, CardProps, Chip, Typography as Title, Typography as SubTitle, TypographyProps } from '@mui/material'
import { COLORS } from '../../../constants/colors'
import { StoreCardProps } from '@components/molecules/StoreCard/StoreCard'
import { SNSLoginsProps } from '@components/molecules/SNSLogins/SNSLogins'
import { mockSession } from 'next-auth/client/__tests__/helpers/mocks'
import image = mockSession.user.image
import LoginButton, { LoginButtonProps } from '@components/atoms/LoginButton/LoginButton'
import { BoxProps } from '@mui/system'

export type SNSLoginsViewProps = {
  loginButtons: LoginButtonProps[]
} & SNSLoginsProps

const SNSLoginsView = ({ loginButtons }: SNSLoginsViewProps) => {
  const uiConfig = {
    Buttons: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem 3rem 3rem',
      },
    } as BoxProps,
  }

  return (
    <Box {...uiConfig.Buttons}>
      {loginButtons.map((value, index) => {
        return <LoginButton key={index} {...value} />
      })}
    </Box>
  )
}

export default SNSLoginsView
