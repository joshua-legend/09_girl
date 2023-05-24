import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, ButtonGroup, ButtonGroupProps, ButtonProps, Card, CardContent, CardMedia, CardMediaProps, CardProps, Chip, List, ListItem, ListItemProps, ListItemText, ListItemTextProps, Typography, Typography as Title, Typography as SubTitle, TypographyProps } from '@mui/material'
import { ItemCounterActionsResult } from './ItemCounterActionsResult'
import { COLORS } from '@styles/colors'
import Button from '@mui/material/Button'

export type ItemCounterViewProps = {
  name?: string
  price?: number
  quantity?: number
}

const ItemCounterView = ({ name, price, quantity, onPlusClick, onMinusClick }: ItemCounterViewProps & ItemCounterActionsResult) => {
  const uiConfig = {
    listItem: {
      disablePadding: true,
    } as ListItemProps,
    listItemText: {
      primary: name,
      secondary: price + '원',
      secondaryTypographyProps: {
        style: {},
      },
    } as ListItemTextProps,
    buttonGroup: {
      disableElevation: true,
      variant: 'outlined',
    } as ButtonGroupProps,
    minusButton: {
      style: {
        backgroundColor: 'transparent',
        color: 'black',
        borderColor: COLORS.BORDER,
      },
      onClick: onMinusClick,
    } as ButtonProps,
    quantityButton: {
      disabled: true,
      style: {
        backgroundColor: 'transparent',
        color: 'black',
        borderColor: COLORS.BORDER,
      },
    } as ButtonProps,
    plusButton: {
      style: {
        backgroundColor: 'transparent',
        color: 'black',
        borderColor: COLORS.BORDER,
      },
      onClick: onPlusClick,
    } as ButtonProps,
  }
  return (
    <Box sx={{ margin: '1rem 0' }}>
      <ListItem {...uiConfig.listItem}>
        <ListItemText {...uiConfig.listItemText} />
        <ButtonGroup {...uiConfig.buttonGroup} aria-label='Disabled elevation buttons'>
          <Button {...uiConfig.minusButton}>-</Button>
          <Button {...uiConfig.quantityButton}>{quantity ?? 0}</Button>
          <Button {...uiConfig.plusButton}>+</Button>
        </ButtonGroup>
      </ListItem>
    </Box>
  )
}

export default ItemCounterView
