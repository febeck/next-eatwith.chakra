import { Grid } from '@chakra-ui/react'
import * as React from 'react'
import { HighlightCard } from '../components/HighlightCard'
import { Section } from '../components/Section'

export function HighlightsSection() {
  return (
    <Section bg='yellow.50'>
      <Section.Header>Explore with Eatwith</Section.Header>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={4}>
        <HighlightCard bg='pink.300'>
          <HighlightCard.Content
            color='pink.800'
            heading='Online experiences'
            text='Bring the world into your kitchen with Eatwith Live online cooking classes & workshops.'
          />
          <HighlightCard.Image imageUrl='https://screen-api.eatwith.com/files/1420638/-/scale_crop/200x300/center/-/progressive/yes/' />
        </HighlightCard>
        <HighlightCard bg='brand.300'>
          <HighlightCard.Content
            color='brand.800'
            heading='Online experiences'
            text='Bring the world into your kitchen with Eatwith Live online cooking classes & workshops.'
          />
          <HighlightCard.Image imageUrl='https://screen-api.eatwith.com/files/1421798/-/scale_crop/200x300/center/-/progressive/yes/' />
        </HighlightCard>
        <HighlightCard bg='purple.300'>
          <HighlightCard.Content
            color='purple.800'
            heading='Online experiences'
            text='Bring the world into your kitchen with Eatwith Live online cooking classes & workshops.'
          />
          <HighlightCard.Image imageUrl='https://screen-api.eatwith.com/files/1421219/-/scale_crop/200x300/center/-/progressive/yes/' />
        </HighlightCard>
      </Grid>
    </Section>
  )
}
