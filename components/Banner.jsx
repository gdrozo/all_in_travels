import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='w-full relative flex flex-col'>
      <Image
        className='absolute top-0 left-0 w-full object-cover'
        src='/header.png'
        alt='banner'
        width={1920}
        height={877}
      />
      <div>THE TRAVEL</div>
      <div>EXPERIENCE</div>
    </div>
  )
}

export default Banner
