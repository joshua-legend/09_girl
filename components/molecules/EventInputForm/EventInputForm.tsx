import React, { useState } from 'react'
import { PageType, Item } from '../../../pages/admin'
import EventInputFormView, { EventInputFormViewProps } from '@components/molecules/EventInputForm/EventInputFormView'
import EventInputFormAction from '@components/molecules/EventInputForm/EventInputFormAction'
import { BandPost, EventInfo } from '../../../pages/admin/register'

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
        placeholder: '',
      },
      {
        title: '시작 날짜',
        type: 'date',
        label: 'startDay',
        text: info.startDay,
        handleChange: handleStartDay,
        multiline: false,
        placeholder: '',
        sx: {
          width: {
            xs: '80%',
            md: '40%',
          },
        },
      },
      {
        title: '마감 날짜',
        type: 'date',
        label: 'endDay',
        text: info.endDay,
        multiline: false,
        handleChange: handleEndDay,
        placeholder: '',
        sx: {
          width: {
            xs: '80%',
            md: '40%',
          },
        },
      },
    ],
    post_key: info.post_key,
    handleStore,
    post,
  } as EventInputFormViewProps
  return <EventInputFormView {...newProps} />
}

export default EventInputForm
