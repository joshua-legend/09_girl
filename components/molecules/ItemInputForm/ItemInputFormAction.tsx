import React, { SyntheticEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Item } from '../../../pages/admin'

export type ItemInputFormActionProps = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  price: string
  setPrice: React.Dispatch<React.SetStateAction<string>>
  rows: Item[]
  setRows: React.Dispatch<React.SetStateAction<Item[]>>
  selectionModel: any
}
export type ItemInputFormActionHandlersResult = {
  addItem: () => void
  handleName: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  handlePrice: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  deleteRows: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ItemInputFormAction = ({ name, setName, price, setPrice, rows, setRows, selectionModel }: ItemInputFormActionProps): ItemInputFormActionHandlersResult => {
  const addItem = () => {
    setRows((prevState) => [
      ...prevState,
      {
        name,
        price: parseInt(price) || 0,
        _id: uuidv4(),
      },
    ])
    setName('')
    setPrice('')
  }
  const handleName = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setName(event.target.value)
  }
  const handlePrice = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPrice(event.target.value)
  }
  const deleteRows = (event: React.MouseEvent<HTMLButtonElement>) => {
    const filteredItems = rows.filter((item) => !selectionModel.includes(item._id))
    setRows(filteredItems)
  }
  return {
    addItem,
    handleName,
    handlePrice,
    deleteRows,
  }
}

export default ItemInputFormAction
