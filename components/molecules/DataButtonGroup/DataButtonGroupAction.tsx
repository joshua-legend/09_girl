import React, { MouseEventHandler, SyntheticEvent } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { DataButtonGroupProps } from '@components/molecules/DataButtonGroup/DataButtonGroup'

export type DataButtonGroupActionProps = {}
export type DataButtonGroupActionHandlersResult = {
  deleteRows: (event: React.MouseEvent<HTMLButtonElement>) => void
  refreshPage: (event: React.MouseEvent<HTMLButtonElement>) => void
  postRows: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const DataButtonGroupAction = ({ storeID, originData, rows, setRows, selectionModel }: DataButtonGroupProps & DataButtonGroupActionProps): DataButtonGroupActionHandlersResult => {
  const router = useRouter()

  const deleteRows = (event: React.MouseEvent<HTMLButtonElement>) => {
    const filteredItems = rows.filter((item) => !selectionModel.includes(item._id))
    setRows(filteredItems)
  }

  const refreshPage = (event: React.MouseEvent<HTMLButtonElement>) => router.reload()

  const postRows = async (event: React.MouseEvent<HTMLButtonElement>) => {
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
