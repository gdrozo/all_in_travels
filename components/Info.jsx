import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Info({ title, children }) {
  return (
    <div className='w-dvw overflow-hiddens flex flex-col justify-end items-center gap-20'>
      <h2 className='text-secondary-color font-bold text-4xl tracking-[0.5em] max-w-[1325px] pt-20'>
        {title}
      </h2>
      {children}
      <div className='h-px max-w-[1325px] bg-secondary-color w-[min(1325px,100dvw)]'></div>
    </div>
  )
}

export default Info
