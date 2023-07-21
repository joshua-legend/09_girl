import React, { useState } from 'react'
import { PageType, Item } from '../../../pages/admin'
import EventInputFormView from '@components/molecules/EventInputForm/EventInputFormView'
import EventInputFormAction from '@components/molecules/EventInputForm/EventInputFormAction'
import { BandPost, EventInfo } from '../../../pages/admin/register'
import { post } from 'axios'

export type EventInputFormProps = {
  info: EventInfo
  post: BandPost[]
  setInfo: React.Dispatch<React.SetStateAction<EventInfo>>
}
const EventInputForm = ({ info, post, setInfo }: EventInputFormProps) => {
  const { handleTitle, handleStartDay, handleEndDay, handleStore } = EventInputFormAction({ info, setInfo })

  const newProps = {
    PageTitlesInputs: [
      {
        title: '이벤트 제목',
        label: 'title',
        type: 'text',
        text: info.title,
        handleChange: handleTitle,
        multiline: true,
        limitLength: 100,
      },
      {
        title: '시작 날짜',
        type: 'date',
        label: 'startDay',
        text: info.startDay,
        handleChange: handleStartDay,
        sx: {
          width: {
            xs: '80%',
            md: '10%',
          },
        },
      },
      {
        title: '마감 날짜',
        type: 'date',
        label: 'endDay',
        text: info.endDay,
        handleChange: handleEndDay,
        sx: {
          width: {
            xs: '80%',
            md: '10%',
          },
        },
      },
    ],
    post_key: info.post_key,
    handleStore,
    post,
  }
  return <EventInputFormView {...newProps} />
}

export default EventInputForm
