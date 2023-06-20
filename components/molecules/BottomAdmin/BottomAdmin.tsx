import React, { useState } from 'react'
import { useRouter } from 'next/router'
import BottomAdminView, { BottomAdminViewProps } from '@components/molecules/BottomAdmin/BottomAdminView'
import BottomAdminAction, { BottomAdminActionHandlersResult } from '@components/molecules/BottomAdmin/BottomAdminAction'

export type BottomAdminProps = {}
const BottomAdmin = (props: BottomAdminProps) => {
  const [store, setStore] = useState(0)
  const router = useRouter()
  const handlers = BottomAdminAction({ setStore })

  const newProps = {
    store,
    labels: ['운양점', '장기점', '고촌점'],
    ...handlers,
  } as BottomAdminViewProps & BottomAdminActionHandlersResult

  return <BottomAdminView {...newProps} />
}

export default BottomAdmin
