import React, { SyntheticEvent } from 'react'

export type BottomAdminActionProps = {
  setStore: React.Dispatch<React.SetStateAction<number>>
}
export type BottomAdminActionHandlersResult = {
  onChange: (event: React.SyntheticEvent, value: any) => void
}

const BottomAdminAction = ({ setStore }: BottomAdminActionProps): BottomAdminActionHandlersResult => {
  const onChange = (event: React.SyntheticEvent, value: any) => {
    setStore(value)
  }

  return {
    onChange,
  }
}

export default BottomAdminAction
