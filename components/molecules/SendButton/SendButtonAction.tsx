import React, { MouseEventHandler, SyntheticEvent } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { PageType, Item } from '../../../pages/admin'
import { EventInfo } from '../../../pages/admin/register'
import { v4 as uuidv4 } from 'uuid'

export type SendDataActionProps = {
  rows: Item[]
  info: EventInfo
}
export type SendDataActionHandlersResult = {
  sendData: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SendButtonAction = ({ info, rows }: SendDataActionProps): SendDataActionHandlersResult => {
  const router = useRouter()
  const sendData = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const responses = await axios.post(`${process.env.API_URL}/postPageByStore`, { _id: uuidv4(), ...info, items: rows })
    if (responses.status === 200) {
      console.log('성공')
    } else console.log('실패')
  }

  return {
    sendData,
  }
}

export default SendButtonAction
