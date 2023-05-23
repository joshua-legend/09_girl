import React from 'react'
import CardView, { CardViewProps } from './CardView'
import CardAction, { CardActionProps } from './CardAction'

export type CardContainerProps = {} & CardViewProps

const CardContainer = ({}: CardContainerProps) => {
  return <CardView {...CardAction} />
}

export default CardContainer
