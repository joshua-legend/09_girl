import React, { ChangeEvent, SyntheticEvent } from 'react'
import { IconTitleInputProps } from '@components/molecules/IconTitleInput/IconTitleInput'
import AddressStore from '../../../store/AddressStore'

export type IconTitleInputActionProps = {
  setText: React.Dispatch<React.SetStateAction<string>>
  setCurrentLength: React.Dispatch<React.SetStateAction<number>>
  label: string
} & Pick<IconTitleInputProps, 'limitLength'>
export type IconTitleInputActionHandlersResult = {
  handleChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const IconTitleInputAction = ({ setText, setCurrentLength, limitLength, label }: IconTitleInputActionProps): IconTitleInputActionHandlersResult => {
  const { setAddress } = AddressStore()

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target
    if (value.length <= limitLength) {
      setText(value)
      setCurrentLength(value.length)
      setAddress({ [label]: value })
    } else {
      setText(value.substring(0, limitLength))
    }
  }
  return {
    handleChange,
  }
}

export default IconTitleInputAction
