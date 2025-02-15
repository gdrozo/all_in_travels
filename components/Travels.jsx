import React from 'react'
import Info from './Info'
import Travel from './Travel'
import { Button } from './ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

async function Travels() {
  const travels = await (
    await fetch('https://api.test.interactiva.net.co/api/get-travels/')
  ).json()

  return (
    <>
      <Info title={'EXPERIENCIAS GRUPALES'}>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full max-w-[90dvw]'
        >
          <CarouselContent className='max-w-[90dvw]'>
            {travels.map(travel => (
              <CarouselItem
                key={travel.id}
                className='md:basis-1/2 2xl:basis-1/3'
              >
                <Travel
                  title={travel.title}
                  date={formatDateString(travel.date_start, travel.date_end)}
                  price={'DESDE ' + travel.cost + ' USD'}
                  description={travel.description}
                  url={travel.url_front}
                  path={
                    'https://api.test.interactiva.net.co' + travel.image_cover
                  }
                  alt={travel.title}
                  state={{
                    name: travel.status.title,
                    color: travel.status.color,
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='text-secondary-color border-secondary-color border-2' />
          <CarouselNext className='text-secondary-color border-secondary-color border-2' />
        </Carousel>
      </Info>
    </>
  )
}

export default Travels

function formatDateString(startDate, endDate) {
  const start = new Date(startDate)
  const end = new Date(endDate)

  const monthNames = [
    'ENERO',
    'FEBRERO',
    'MARZO',
    'ABRIL',
    'MAYO',
    'JUNIO',
    'JULIO',
    'AGOSTO',
    'SEPTIEMBRE',
    'OCTUBRE',
    'NOVIEMBRE',
    'DICIEMBRE',
  ]

  const startDay = start.getDate()
  const endDay = end.getDate()
  const month = monthNames[start.getMonth()]

  const result = `${startDay} AL ${endDay} DE ${month}`

  return result
}
