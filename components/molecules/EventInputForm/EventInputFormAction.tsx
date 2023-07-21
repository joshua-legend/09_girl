import React, { SyntheticEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ItemInputFormProps } from '@components/molecules/ItemInputForm/ItemInputForm'
import { PageType } from '../../../pages/admin'
import { EventInfo } from '../../../pages/admin/register'

export type EventInputFormActionProps = {
  info: EventInfo
  setInfo: React.Dispatch<React.SetStateAction<EventInfo>>
}
export type EventInputFormActionHandlersResult = {
  handleTitle: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  handleStartDay: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  handleEndDay: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  handleStore: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const EventInputFormAction = ({ info, setInfo }: EventInputFormActionProps): EventInputFormActionHandlersResult => {
  const handleTitle = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInfo((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      }
    })
  }
  const handleStartDay = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInfo((prevState) => {
      return {
        ...prevState,
        startDay: event.target.value,
      }
    })
  }
  const handleEndDay = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInfo((prevState) => {
      return {
        ...prevState,
        endDay: event.target.value,
      }
    })
  }
  const handleStore = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInfo((prevState) => {
      return {
        ...prevState,
        post_key: event.target.value,
      }
    })
  }

  return {
    handleTitle,
    handleStartDay,
    handleEndDay,
    handleStore,
  }
}

export default EventInputFormAction
