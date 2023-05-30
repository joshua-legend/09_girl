import React, { ReactElement, useState } from 'react'
import IconTitleSelectorView, { IconTitleSelectorViewProps } from '@components/molecules/IconTitleSelector/IconTitleSelectorView'
import IconTitleSelectorAction from '@components/molecules/IconTitleSelector/IconTitleSelectorAction'
import { AccountCircle, SvgIconComponent } from '@mui/icons-material'

export type IconTitleSelectorProps = {
  icon: ReactElement
  title: string
  label: string
  placeholder: string
  isNecessary: boolean
}
const IconTitleSelector = (props: IconTitleSelectorProps) => {
  const actions = IconTitleSelectorAction()
  const newProps = {
    ...props,
  } as IconTitleSelectorViewProps

  return <IconTitleSelectorView {...newProps} />
}

export default IconTitleSelector
