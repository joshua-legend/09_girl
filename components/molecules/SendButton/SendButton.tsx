import React, { useState } from 'react'
import { PageType, Item } from '../../../pages/admin'
import SendButtonAction from '@components/molecules/SendButton/SendButtonAction'
import SendButtonView from '@components/molecules/SendButton/SendButtonView'
import { EventInfo } from '../../../pages/admin/register'

export type DataButtonGroupProps = {
  rows: Item[]
  info: EventInfo
}
const SendButton = ({ rows, info }: DataButtonGroupProps) => {
  const actions = SendButtonAction({ rows, info })
  const newProps = {
    ...actions,
  }

  return <SendButtonView {...newProps} />
}

export default SendButton
