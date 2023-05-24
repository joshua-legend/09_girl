import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, CardMedia, CardMediaProps, CardProps, Chip, List, ListItem, ListItemText, Typography, Typography as Title, Typography as SubTitle, TypographyProps } from '@mui/material'
import { AccordionCartActionProps } from './AccordionCartAction'
import { COLORS } from '@styles/colors'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export type AccordionCartViewProps = {}

const AccordionCartView = () => {
  const uiConfig = {}

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>과일류</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          <ListItem disablePadding>
            <ListItemText primary={'싱싱한 토마토'} secondary={'19999'} secondaryTypographyProps={{ style: { color: 'red' } }} />
            <Chip label='Small' size='small' />
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  )
}

export default AccordionCartView
