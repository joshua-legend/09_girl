import React, { MouseEventHandler, SyntheticEvent } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { DataButtonGroupProps } from '@components/molecules/DataButtonGroup/DataButtonGroup'

export type DataButtonGroupActionProps = {}
export type DataButtonGroupActionHandlersResult = {
  deleteRows: (event: React.ChangeEvent<MouseEventHandler<HTMLAnchorElement> | undefined | MouseEventHandler<HTMLButtonElement>>) => void
  refreshPage: (event: React.ChangeEvent<MouseEventHandler<HTMLAnchorElement> | undefined | MouseEventHandler<HTMLButtonElement>>) => void
  postRows: (event: React.ChangeEvent<MouseEventHandler<HTMLAnchorElement> | undefined | MouseEventHandler<HTMLButtonElement>>) => void
}

const DataButtonGroupAction = ({ storeID, originData, rows, setRows, selectionModel }: DataButtonGroupProps & DataButtonGroupActionProps): DataButtonGroupActionHandlersResult => {
  const router = useRouter()

  const deleteRows = () => {
    const filteredItems = rows.filter((item) => !selectionModel.includes(item._id))
    setRows(filteredItems)
  }

  const refreshPage = () => router.reload()

  const postRows = async () => {
    const toBeDeletedData = originData.filter((originItem) => {
      return !rows.some((rowItem) => rowItem._id === originItem._id)
    })
    const newlyAddedData = rows.filter((rowItem) => {
      return !originData.some((originItem) => originItem._id === rowItem._id)
    })
    const responses = [await axios.post(`${process.env.API_URL}/deleteItemsByStore/${storeID}`, toBeDeletedData), await axios.post(`${process.env.API_URL}/postItemsByStore/${storeID}`, newlyAddedData)]
    const allSuccessful = responses.every((response) => response.status === 200)
    if (!allSuccessful) {
      console.log('실패')
    } else console.log('성공')
  }

  return {
    postRows,
    deleteRows,
    refreshPage,
  }
}

export default DataButtonGroupAction
