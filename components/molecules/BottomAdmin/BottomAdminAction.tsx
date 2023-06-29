import React, { SyntheticEvent } from 'react'
import { useRouter } from 'next/router'

export type BottomAdminActionProps = {
  setStore: React.Dispatch<React.SetStateAction<number>>
}
export type BottomAdminActionHandlersResult = {
  onChange: (event: React.SyntheticEvent, value: any) => void
}

const BottomAdminAction = ({ setStore }: BottomAdminActionProps): BottomAdminActionHandlersResult => {
  const router = useRouter()

  const onChange = (event: React.SyntheticEvent, value: any) => {
    window.location.href = `/admin/${value + 1}`
    // router.replace(`/admin/${value + 1}`)
  }

  return {
    onChange,
  }
}

export default BottomAdminAction
