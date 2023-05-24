import type { NextPage } from 'next'
import IntroBanner from '@components/molecules/IntroBanner/IntroBanner'
import AdBanner, { AdBannerProps } from '@components/organisms/AdBanner/AdBanner'
import { IMAGES } from '@styles/images'
import { Accordion, AccordionDetails, AccordionSummary, Box, ButtonGroup, Chip, List, ListItem, ListItemText, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import ItemCounter from '@components/molecules/AccordionCart/ItemCounter/ItemCounter'

const Home: NextPage = () => {
  const props = {
    adBanner: {
      cards: [{ card: { image: IMAGES.TEST1, title: '40년 정통 맛집, 무침회', subtitle: '납작만두 추가 원하시는분들 많아서 추가!' } }, { card: { image: IMAGES.TEST2, title: '패션후르츠청', subtitle: '인공색소, 인공향료, 보존료 3무 첨가로 건강하게!!' } }, { card: { image: IMAGES.TEST3 } }],
    },
  } as AdBannerProps

  return (
    <>
      <IntroBanner />
      <AdBanner {...props} />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>과일류</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ItemCounter />
            <ItemCounter />
            <ItemCounter />
          </List>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Home
