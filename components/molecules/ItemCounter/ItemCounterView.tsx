import React from 'react'
import { Box, BoxProps, ButtonGroup, ButtonGroupProps, ButtonProps, Chip, ChipProps, IconButton, ListItem, ListItemProps, ListItemText, ListItemTextProps, Tooltip } from '@mui/material'
import { ItemCounterActionResult } from './ItemCounterAction'
import { COLORS } from '../../../constants/colors'
import Button from '@mui/material/Button'
import { FONTS } from '../../../constants/fonts'
import { ItemCounterProps } from '@components/molecules/ItemCounter/ItemCounter'

export type ItemCounterViewProps = {
  quantity: number
} & ItemCounterProps &
  ItemCounterActionResult

const ItemCounterView = ({ name = 'Test 입니다.', price = 10000, quantity, isNeedOption = false, onPlusClick, onMinusClick }: ItemCounterViewProps) => {
  const uiConfig = {
    box: {
      style: {
        padding: '1rem',
        border: `1px solid ${COLORS.TRANSPARENT_BLACK}`,
      },
    } as BoxProps,
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
    chip: {} as ChipProps,
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
    <Box {...uiConfig.box}>
      <ListItem {...uiConfig.listItem}>
        <ListItemText {...uiConfig.listItemText} />
        {isNeedOption ? <Chip size={'small'} sx={{ fontSize: '14px', margin: '0.5rem 0.5rem 0.5rem 0', fontFamily: FONTS.TITLE }} label='옵션주의!' /> : null}
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
