import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import jwt from 'jsonwebtoken'
import { Box, BoxProps, TypographyProps } from '@mui/system'
import Typography from '@mui/material/Typography'
import { FONTS } from '../../constants/fonts'
import { verifyToken } from '../../utils/verifyToken'
import { Button, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { COLORS } from '../../constants/colors'
import axios from 'axios'
import { end } from '@popperjs/core'

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const isTokenValid = await verifyToken(context)
  if (!isTokenValid) {
    return { redirect: { destination: '/', permanent: false } }
  }
  const JWT_SECRET = process.env.JWT_SECRET
  if (!JWT_SECRET) {
    throw new Error('Missing JWT_SECRET environment variable')
  }
  const token = context.req.cookies.token as string
  const payload = await jwt.verify(token, JWT_SECRET)
  const { id } = payload
  const response = await axios.get(`${process.env.API_URL}/getReceipt/${id}`, {
    withCredentials: true,
  })
  const receipt = response.data.receipt
  receipt.purchased_items = receipt.purchased_items.map((item) => `${item.name} ${item.quantity}개`)
  delete receipt.userId

  const data = { props: { payload, receipt } }
  return data
}
type ProcessProps = {
  receipt: any
  payload: any
}
const Index: NextPage = ({ receipt, payload }: ProcessProps) => {
  const uiConfig = {
    Container: {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1rem',
      },
    } as BoxProps,
    Title: {
      sx: {
        fontFamily: FONTS.PRETENDARD,
        fontSize: '24px',
        lineHeight: '115%',
        fontWeight: '700',
        letterSpacing: '-0.2px',
        color: 'rgb(88, 89, 91)',
        marginLeft: '5px',
        textAlign: 'center',
      },
    } as TypographyProps,
    box: {
      sx: {
        fontFamily: FONTS.PRETENDARD,
        fontSize: '14px',
        fontWeight: '500',
        color: 'rgb(88, 89, 91)',
        border: `1px solid ${COLORS.TRANSPARENT_BLACK}`,
        margin: '1rem 0rem',
        borderRadius: '2px',
      },
    } as BoxProps,
    ListItem: {
      sx: {
        borderBottom: `1px solid ${COLORS.BORDER}`,
      },
    },
    ListItemButton: {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
    Typos: {
      sx: {
        flex: '1',
      },
    },
    TyposValue: {
      sx: {
        textAlign: 'end',
        flex: '1',
      },
    },
    TyposArray: {
      sx: {
        flex: '1',
      },
    },
  }

  const keyMap = {
    '구매 항목': receipt.purchased_items,
    '총 금액': receipt.total,
    '구매 날짜': receipt.purchaseDate,
    닉네임: receipt.nickname,
    '휴대폰 번호': receipt.mobile,
    '배송 여부': receipt.isDelivery ? '집으로 배달' : '픽업하기',
    주소: receipt.isDelivery ? receipt.address : null,
    '상세 주소': receipt.isDelivery ? receipt.detail : null,
  }

  const keys = ['구매 항목', '총 금액', '구매 날짜', '닉네임', '휴대폰 번호', '배송 여부', '주소', '상세 주소']

  return (
    <>
      <Box {...uiConfig.Container}>
        <Typography {...uiConfig.Title}>주문 완료</Typography>
        <Box {...uiConfig.box}>
          {keys.map((value, index) => (
            <ListItem {...uiConfig.ListItem} key={index}>
              <ListItemButton {...uiConfig.ListItemButton}>
                <Typography {...uiConfig.Typos}>{value}</Typography>
                <Box {...uiConfig.TyposValue}>
                  {Array.isArray(keyMap[value])
                    ? keyMap[value].map((item, i) => (
                        <React.Fragment key={i}>
                          <Typography {...uiConfig.TyposArray}>{item}</Typography>
                        </React.Fragment>
                      ))
                    : keyMap[value]}
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
        <Button variant='contained' color='primary'>
          밴드로 돌아가기
        </Button>
      </Box>
    </>
  )
}

export default Index
