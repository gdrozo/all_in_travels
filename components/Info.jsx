import React from 'react'

function Info({ title, children }) {
  return (
    <div className='w-dvw overflow-hiddens flex flex-col justify-end items-center gap-20'>
      <h2 className='text-secondary-color font-bold text-4xl tracking-[0.5em] max-w-[1325px] pt-20'>
        {title}
      </h2>
      {children}
    </div>
  )
}

export default Info
