import React from 'react'
import CardView, { CardViewProps } from './CardView'
import CardAction, { CardActionProps } from './CardAction'

export type CardContainerProps = {} & CardViewProps

const CardContainer = ({ card }: CardContainerProps) => {
  return <CardView {...CardAction} card={card} />
}

export default CardContainer
