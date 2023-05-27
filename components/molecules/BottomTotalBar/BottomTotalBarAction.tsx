import React, { SyntheticEvent } from 'react'

export type BottomTotalBarActionProps = {
  setStore: React.Dispatch<React.SetStateAction<number>>
}
export type BottomTotalBarActionHandlersResult = {
  onChange: (event: SyntheticEvent, value: number) => void
}

const BottomTotalBarAction = ({ setStore }: BottomTotalBarActionProps): BottomTotalBarActionHandlersResult => {
  const onChange = (event: SyntheticEvent, value: number) => setStore(value)
  return {
    onChange,
  }
}

export default BottomTotalBarAction
