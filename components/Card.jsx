import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Cards({ url, alt, path, title }) {
  return (
    <div className='h-[14rem] w-[25rem] rounded-3xl relative overflow-hidden'>
      <Link
        href={url}
        className='absolute text-white h-full w-full z-10 flex items-center justify-center'
      >
        <Image
          src={path}
          alt={alt}
          width={375}
          height={200}
          className='h-[200px] object-cover'
        />
        <div className='absolute text-lg font-bold bottom-6 right-6 flex items-center'>
          <div>{title}</div>
          <div className='border rounded-full border-white flex items-center justify-center w-6 h-6 ml-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-5 pl-px'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='m8.25 4.5 7.5 7.5-7.5 7.5'
              />
            </svg>
          </div>
        </div>
      </Link>

      <div className='absolute top-0 left-0 w-full h-full bg-white opacity-40 z-0'></div>
    </div>
  )
}

export default Cards
