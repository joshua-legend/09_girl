import React, { useState } from 'react'
import ItemInputFormView, { ItemInputFormViewProps } from '@components/molecules/ItemInputForm/ItemInputFormView'
import ItemInputFormAction, { ItemInputFormActionHandlersResult } from '@components/molecules/ItemInputForm/ItemInputFormAction'
import { Item } from '../../../pages/admin'

export type ItemInputFormProps = {
  rows: Item[]
  setRows: React.Dispatch<React.SetStateAction<Item[]>>
  selectionModel: any
}
const ItemInputForm = ({ rows, setRows, selectionModel }: ItemInputFormProps) => {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const actions = ItemInputFormAction({ name, setName, price, setPrice, rows, setRows, selectionModel })
  const newProps = {
    name,
    price,
    ...actions,
  } as ItemInputFormProps & ItemInputFormViewProps & ItemInputFormActionHandlersResult

  return <ItemInputFormView {...newProps} />
}

export default ItemInputForm
