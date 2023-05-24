import React from 'react'
import AccordionCartView, { AccordionCartViewProps } from './AccordionCartView'
import AccordionCartAction from './AccordionCartAction'

export type AccordionCartProps = {
  card: AccordionCartViewProps
}

const AccordionCart = ({ card }: AccordionCartProps) => {
  return <AccordionCartView {...AccordionCartAction} {...card} />
}

export default AccordionCart
