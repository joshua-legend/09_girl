import React, { SyntheticEvent } from 'react'
import { Item, PageType } from '../../../pages/admin'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'

export type PageInputFormActionProps = {
  rows: PageType[]
  setRows: React.Dispatch<React.SetStateAction<PageType[]>>
  selectionModel: any
}
export type PageInputFormActionHandlersResult = {
  addItem: () => void
  deleteRows: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const PageInputFormAction = ({ rows, setRows, selectionModel }: PageInputFormActionProps): PageInputFormActionHandlersResult => {
  const router = useRouter()

  const addItem = () => {
    router.push('/admin/register')
  }
  const deleteRows = (event: React.MouseEvent<HTMLButtonElement>) => {
    const filteredItems = rows.filter((item) => !selectionModel.includes(item._id))
    setRows(filteredItems)
  }
  return {
    addItem,
    deleteRows,
  }
}

export default PageInputFormAction
