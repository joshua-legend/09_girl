import React from 'react'
import CardView, { CardViewProps } from './CardView'
import CardAction from './CardAction'

export type CardProps = {
  card: CardViewProps
}

const Card = ({ card }: CardProps) => {
  return <CardView {...CardAction} {...card} />
}

export default Card
