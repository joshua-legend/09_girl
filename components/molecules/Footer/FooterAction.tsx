import React, { SyntheticEvent } from 'react'

export type FooterActionProps = {
  setStore: React.Dispatch<React.SetStateAction<number>>
}
export type FooterActionHandlersResult = {
  onChange: (event: SyntheticEvent, value: number) => void
}

const FooterAction = ({ setStore }: FooterActionProps): FooterActionHandlersResult => {
  const onChange = (event: SyntheticEvent, value: number) => setStore(value)
  return {
    onChange,
  }
}

export default FooterAction
