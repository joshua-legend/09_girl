import React, { useState } from 'react'
import ItemInputFormView, { ItemInputFormViewProps } from '@components/molecules/ItemInputForm/ItemInputFormView'
import ItemInputFormAction, { ItemInputFormActionHandlersResult } from '@components/molecules/ItemInputForm/ItemInputFormAction'
import { Item } from '../../../pages/admin'

export type ItemInputFormProps = {
  setRows: React.Dispatch<React.SetStateAction<Item[]>>
  storeName: string
}
const ItemInputForm = ({ setRows, storeName }: ItemInputFormProps) => {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const actions = ItemInputFormAction({ name, setName, price, setPrice, setRows, storeName })
  const newProps = {
    name,
    price,
    storeName,
    ...actions,
  } as ItemInputFormProps & ItemInputFormViewProps & ItemInputFormActionHandlersResult

  return <ItemInputFormView {...newProps} />
}

export default ItemInputForm
