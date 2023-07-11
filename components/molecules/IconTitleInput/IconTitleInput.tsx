import React, { ReactElement, useState } from 'react'
import IconTitleInputView, { IconTitleInputViewProps } from '@components/molecules/IconTitleInput/IconTitleInputView'
import IconTitleInputAction, { IconTitleInputActionHandlersResult } from '@components/molecules/IconTitleInput/IconTitleInputAction'

export type IconTitleInputProps = {
  icon: ReactElement
  text: string
  type?: string
  title: string
  label: string
  placeholder: string
  isNecessary: boolean
  multiline: boolean
  limitLength: number
}
const IconTitleInput = (props: IconTitleInputProps) => {
  const [text, setText] = useState(props.text ?? '')
  const [currentLength, setCurrentLength] = useState(text.length)
  const { limitLength, label } = props
  const actions = IconTitleInputAction({ setCurrentLength, setText, limitLength, label })
  const newProps = {
    ...props,
    text,
    currentLength,
    ...actions,
  } as IconTitleInputViewProps & IconTitleInputActionHandlersResult

  return <IconTitleInputView {...newProps} />
}

export default IconTitleInput
