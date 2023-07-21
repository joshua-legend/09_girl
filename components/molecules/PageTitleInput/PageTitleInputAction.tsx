import React, { ChangeEvent, SyntheticEvent } from 'react'
import { IconTitleInputProps } from '@components/molecules/IconTitleInput/IconTitleInput'

export type PageTitleInputActionProps = {
  setText: React.Dispatch<React.SetStateAction<string>>
  setCurrentLength: React.Dispatch<React.SetStateAction<number>>
  label: string
} & Pick<IconTitleInputProps, 'limitLength'>
export type PageTitleInputActionHandlersResult = {
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const PageTitleInputAction = ({ setText, setCurrentLength, limitLength = 100 }: PageTitleInputActionProps): PageTitleInputActionHandlersResult => {
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

export default PageTitleInputAction
