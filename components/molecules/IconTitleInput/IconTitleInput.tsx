import React, { useState } from 'react'
import { TotalProps } from '@components/atoms/Total/Total'
import IconTitleInputView, { IconTitleInputViewProps } from '@components/molecules/IconTitleInput/IconTitleInputView'
import IconTitleInputAction from '@components/molecules/IconTitleInput/IconTitleInputAction'

export type IconTitleInputProps = {}
const IconTitleInput = (props: IconTitleInputProps) => {
  const actions = IconTitleInputAction()
  const newProps = {} as IconTitleInputViewProps & TotalProps

  return <IconTitleInputView {...newProps} />
}

export default IconTitleInput
