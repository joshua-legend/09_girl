import React, { useState } from 'react'
import { ItemInputFormViewProps } from '@components/molecules/ItemInputForm/ItemInputFormView'
import { ItemInputFormActionHandlersResult } from '@components/molecules/ItemInputForm/ItemInputFormAction'
import { Item } from '../../../pages/admin'
import PageInputFormView from '@components/molecules/PageInputForm/PageInputFormView'
import PageInputFormAction from '@components/molecules/PageInputForm/PageInputFormAction'

export type PageInputFormProps = {
  setRows: React.Dispatch<React.SetStateAction<Item[]>>
  storeName: string
}
const PageInputForm = ({ setRows, storeName }: PageInputFormProps) => {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const actions = PageInputFormAction({ name, setName, price, setPrice, setRows, storeName })
  const newProps = {
    name,
    price,
    storeName,
    ...actions,
  } as PageInputFormProps & ItemInputFormViewProps & ItemInputFormActionHandlersResult

  return <PageInputFormView {...newProps} />
}

export default PageInputForm
