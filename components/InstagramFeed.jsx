'use client'
import React, { use, useRef, useState } from 'react'
import Info from './Info'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'

function InstagramFeed() {
  return (
    <Info title='NOSOTROS' className='relative'>
      <p className='font-thin sm:text-3xl text-xl max-w-[1325px] text-justify w-dvw p-5'>
        Un copy cercano como hablandole a un amigo. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
        veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
        aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in
        hendrerit in vulputate velit esse molestie consequat, vel illum dolore
        eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
        dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
        te feugait nulla facilisi.
      </p>
      <div className='flex justify-center flex-wrap w-[min(100dvw,92rem)]'>
        <Link
          href={'https://www.instagram.com/churroceballos/'}
          className='flex items-center gap-6 z-30 ]'
        >
          <Image
            src='/instagram.png'
            alt='instagram'
            width={50}
            height={50}
            className='w-[50px] h-[50px] hidden sm:block'
          />
          <div className='w-[min(400px,100dvw)] max-w-[400px] min-w-[min(400px,100dvw)] flex flex-col justify-center'>
            <Image
              src={'/nosotros_1.png'}
              alt='nosotros'
              width={400}
              height={400}
              className='w-[min(400px,100dvw)] h-[400px] object-contain'
            />
            <div className='font-thin text-secondary-color text-2xl sm:pt-4'>
              @churroceballos
            </div>
          </div>
        </Link>
        <ImageCarousel />
      </div>
      <div className='h-px max-w-[1325px] bg-secondary-color w-[min(1325px,100dvw)]'></div>
    </Info>
  )
}

export default InstagramFeed

function ImageCarousel() {
  const [images, setImages] = useState([])

  const carousel = useRef()

  React.useEffect(() => {
    fetch('https://api.test.interactiva.net.co/api/get-feed_instagram/')
      .then(response => response.json())
      .then(data => {
        setImages(data)
      })
  }, [])

  React.useEffect(() => {
    if (carousel.current && images.length > 0) {
      if (!isOutOfRightScreen(carousel.current)) {
        setBack(false)
        setNext(false)
      }
    }
  }, [images])

  const [back, setBack] = useState(false)
  const [next, setNext] = useState(true)
  const [x, setX] = useState(0)

  const handleBack = () => {
    setBack(false)
    setNext(true)
    setX(x + 200)
  }

  const handleNext = () => {
    const position = x - 200

    if (position < -500) {
      setBack(true)
      setNext(false)
    }
    setX(x - 200)
  }

  return (
    <>
      <div className='absolute left-0 right-0 flex justify-center h-[400px] '>
        <div className='flex justify-start w-[min(100dvw,92rem)]'>
          <div className='ml-[450px] w-[5.4rem] h-[400px] bg-white z-10'></div>
          <div
            className={
              'h-[400px] transition-opacity duration-500 ease-in-out flex items-center justify-center z-20 mb-12 pr-32text-white bg-gradient-to-r from-black to-transparent ' +
              (back ? 'opacity-100' : 'opacity-0')
            }
          >
            <Button
              variant='ghost'
              className='flex items-center border-4 border-white rounded-full p-1 bg-transparent size-auto ml-10 text-white'
              onClick={handleBack}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-10'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5 8.25 12l7.5-7.5'
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div className='flex flex-grow sm:pl-28'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(${x}px)` }}
        >
          {images.map((image, i) => {
            if (image.id === images[0].id) return ''

            return (
              <Image
                key={image.id}
                src={'https://api.test.interactiva.net.co' + image.image}
                width={400}
                height={400}
                className='w-[400px] h-[400px] object-contain'
                alt='instagram photo'
              />
            )
          })}
          <div ref={carousel} className='h-full w-px' key='zed'></div>
        </div>

        <div
          className={
            'transition-opacity duration-500 ease-in-out absolute right-0 h-[min(400px,100dvw)] flex items-center justify-center z-20 mt-10 sm:mt-0 sm:mb-12 pl-32text-white bg-gradient-to-l from-black to-transparent ' +
            (next ? 'opacity-100' : 'opacity-0')
          }
        >
          <Button
            variant='ghost'
            className='flex items-center border-4 border-white rounded-full p-1  bg-transparent size-auto mr-10 text-white'
            onClick={handleNext}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-10'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m8.25 4.5 7.5 7.5-7.5 7.5'
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  )
}

function isOutOfRightScreen(element) {
  const elementRect = element.getBoundingClientRect()
  const windowWidth = window.innerWidth

  return elementRect.right > windowWidth
}
