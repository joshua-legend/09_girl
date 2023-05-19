import React from 'react'

export type DefaultLayoutActionProps = {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
}
const DefaultLayoutAction: DefaultLayoutActionProps = {
  handleClick: (event) => {},
}

export default DefaultLayoutAction
