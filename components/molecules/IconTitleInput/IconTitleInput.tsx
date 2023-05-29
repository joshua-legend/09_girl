import React, { ReactElement, useState } from 'react'
import IconTitleInputView, { IconTitleInputViewProps } from '@components/molecules/IconTitleInput/IconTitleInputView'
import IconTitleInputAction from '@components/molecules/IconTitleInput/IconTitleInputAction'
import { AccountCircle, SvgIconComponent } from '@mui/icons-material'

export type IconTitleInputProps = {
  icon: ReactElement
  title: string
  label: string
}
const IconTitleInput = (props: IconTitleInputProps) => {
  const actions = IconTitleInputAction()
  const newProps = {
    ...props,
  } as IconTitleInputViewProps

  return <IconTitleInputView {...newProps} />
}

export default IconTitleInput
