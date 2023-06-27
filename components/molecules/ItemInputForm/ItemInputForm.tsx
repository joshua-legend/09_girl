import React, { useState } from 'react'
import ItemInputFormView, { ItemInputFormViewProps } from '@components/molecules/ItemInputForm/ItemInputFormView'
import ItemInputFormAction, { ItemInputFormActionHandlersResult } from '@components/molecules/ItemInputForm/ItemInputFormAction'
import { Item } from '@components/molecules/DataGridForm/DataGridForm'

export type ItemInputFormProps = {
  setRows: React.Dispatch<React.SetStateAction<Item[]>>
}
const ItemInputForm = ({ setRows }: ItemInputFormProps) => {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const actions = ItemInputFormAction({ name, setName, price, setPrice, setRows })
  const newProps = {
    name,
    price,
    ...actions,
  } as ItemInputFormViewProps & ItemInputFormActionHandlersResult

  return <ItemInputFormView {...newProps} />
}

export default ItemInputForm
