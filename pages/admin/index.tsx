import type { NextPage } from 'next'
import React from 'react'
import { Button, Container, TextField } from '@mui/material'
import Typography from '@mui/material/Typography'

const Index: NextPage = () => {
  const props = {}

  const handleLogin = (e) => {
    e.preventDefault()
    // 로그인 처리 로직 작성
  }

  return (
    <>
      <Container maxWidth='sm'>
        <Typography variant='h4' align='center' gutterBottom>
          로그인
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField label='아이디' variant='outlined' fullWidth margin='normal' />
          <TextField label='비밀번호' type='password' variant='outlined' fullWidth margin='normal' />
          <Button type='submit' variant='contained' color='primary' fullWidth>
            로그인
          </Button>
        </form>
      </Container>
    </>
  )
}

export default Index
