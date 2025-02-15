import React from 'react'

function Info({ title, children, className }) {
  return (
    <div
      className={
        'w-dvw overflow-hiddens flex flex-col justify-end items-center sm:gap-20 ' +
        className
      }
    >
      <h2 className='text-secondary-color font-bold text-lg text-center md:text-4xl tracking-[0.5em] max-w-[1325px] pt-0 sm:pt-20'>
        {title}
      </h2>
      {children}
    </div>
  )
}

export default Info
