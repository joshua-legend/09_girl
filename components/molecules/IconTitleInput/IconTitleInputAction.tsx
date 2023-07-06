import React, { ChangeEvent, SyntheticEvent } from 'react'
import { IconTitleInputProps } from '@components/molecules/IconTitleInput/IconTitleInput'

export type IconTitleInputActionProps = {
  setText: React.Dispatch<React.SetStateAction<string>>
  setCurrentLength: React.Dispatch<React.SetStateAction<number>>
} & Pick<IconTitleInputProps, 'limitLength'>
export type IconTitleInputActionHandlersResult = {
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const IconTitleInputAction = ({ setText, setCurrentLength, limitLength }: IconTitleInputActionProps): IconTitleInputActionHandlersResult => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    if (value.length <= limitLength) {
      setText(value)
      setCurrentLength(value.length)
    } else {
      setText(value.substring(0, limitLength))
    }
  }
  return {
    handleChange,
  }
}

export default IconTitleInputAction
