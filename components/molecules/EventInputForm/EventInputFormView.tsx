import React, { ChangeEvent } from 'react'
import { Box as InfoBox, Box, BoxProps, Button, ButtonProps, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TypographyProps } from '@mui/material'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../../constants/fonts'
import PageTitleInput, { PageTitleInputProps } from '@components/molecules/PageTitleInput/PageTitleInput'
import { useRouter } from 'next/router'
import { BandPost } from '../../../pages/admin/register'

export type EventInputFormViewProps = {
  PageTitlesInputs: PageTitleInputProps[]
  post_key: string
  post: BandPost[]
  handleStore: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const EventInputFormView = ({ PageTitlesInputs, post_key, post, handleStore }: EventInputFormViewProps) => {
  const router = useRouter()

  const uiConfig = {
    FormBox: {
      sx: {
        paddingBottom: '1rem',
      },
    } as BoxProps,
    Typo: {
      variant: 'h6',
      sx: {
        marginBottom: '1rem',
        fontFamily: FONTS.PRETENDARD,
      },
    } as TypographyProps,
    Back: {
      variant: 'contained',
      onClick: () => router.push('/admin'),
    } as ButtonProps,
    IconTitleBox: {
      sx: {},
    } as BoxProps,
  }

  return (
    <Box {...uiConfig.FormBox}>
      <Typography {...uiConfig.Typo}>
        새로운 이벤트 추가 <Button {...uiConfig.Back}>뒤로 가기</Button>
      </Typography>
      <InfoBox {...uiConfig.IconTitleBox}>
        {PageTitlesInputs.map((iconTitle, index) => {
          return <PageTitleInput {...iconTitle} key={index} />
        })}
      </InfoBox>
      <FormControl>
        <FormLabel>게시물 선택(최근 5개 기준)</FormLabel>
        <RadioGroup row value={post_key} onChange={handleStore}>
          {post.map((value, index) => (
            <FormControlLabel key={index} value={value.post_key} control={<Radio />} label={value.content} />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default EventInputFormView
