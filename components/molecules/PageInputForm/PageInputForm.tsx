import React, { useState } from 'react'
import ItemInputFormView, { ItemInputFormViewProps } from '@components/molecules/ItemInputForm/ItemInputFormView'
import ItemInputFormAction, { ItemInputFormActionHandlersResult } from '@components/molecules/ItemInputForm/ItemInputFormAction'
import { Item, PageType } from '../../../pages/admin'
import PageInputFormAction from '@components/molecules/PageInputForm/PageInputFormAction'
import PageInputFormView, { PageInputFormViewProps } from '@components/molecules/PageInputForm/PageInputFormView'

export type PageInputFormProps = {
  name: string
  rows: PageType[]
  setRows: React.Dispatch<React.SetStateAction<PageType[]>>
  selectionModel: any
}
const PageInputForm = ({ name, rows, setRows, selectionModel }: PageInputFormProps) => {
  const actions = PageInputFormAction({ rows, setRows, selectionModel })
  const newProps = {
    name,
    ...actions,
  } as PageInputFormViewProps

  return <PageInputFormView {...newProps} />
}

export default PageInputForm
