import React, { SyntheticEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ItemInputFormProps } from '@components/molecules/ItemInputForm/ItemInputForm'

export type PageInputFormActionProps = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  price: string
  setPrice: React.Dispatch<React.SetStateAction<string>>
}
export type PageInputFormActionHandlersResult = {
  addItem: () => void
  handleName: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  handlePrice: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const PageInputFormAction = ({ name, setName, price, setPrice, setRows }: ItemInputFormProps & PageInputFormActionProps): PageInputFormActionHandlersResult => {
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

  return {
    addItem,
    handleName,
    handlePrice,
  }
}

export default PageInputFormAction
