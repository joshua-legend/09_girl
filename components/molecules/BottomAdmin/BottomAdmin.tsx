import React, { useState } from 'react'
import { useRouter } from 'next/router'
import BottomAdminView, { BottomAdminViewProps } from '@components/molecules/BottomAdmin/BottomAdminView'
import BottomAdminAction, { BottomAdminActionHandlersResult } from '@components/molecules/BottomAdmin/BottomAdminAction'

export type BottomAdminProps = {}
const BottomAdmin = ({}: BottomAdminProps) => {
  const { asPath } = useRouter()
  const idString = asPath.split('/admin/')[1] // '123'을 얻습니다
  const idNumber = Number(idString) // 문자열 '123'을 숫자 123으로 변환합니
  const [store, setStore] = useState(idNumber - 1)
  const handlers = BottomAdminAction({ setStore })

  const newProps = {
    store,
    labels: ['운양점', '장기점', '고촌점'],
    ...handlers,
  } as BottomAdminViewProps & BottomAdminActionHandlersResult

  return <BottomAdminView {...newProps} />
}

export default BottomAdmin
