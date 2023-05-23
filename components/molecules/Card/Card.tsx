import React from 'react'
import CardContainer, { CardContainerProps } from './CardContainer'
import { CardViewProps } from '@components/molecules/Card/CardView'

export type CardProps = {} & CardContainerProps

const Card = ({ card }: CardProps) => {
  return <CardContainer card={card} />
}

export default Card
