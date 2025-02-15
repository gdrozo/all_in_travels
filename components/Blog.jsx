import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blog({ path, tittle, children, url }) {
  return (
    <div className='bg-white rounded-2xl px-9 py-8 flex flex-col gap-4 max-w-[95dvw]'>
      <Image src={path} width={517} height={672} alt={tittle}></Image>
      <h2 className='text-2xl font-bold'>{tittle}</h2>
      {children}
      <Link
        href={url}
        className='text-secondary-color font-black underline text-xl text-right'
      >
        LEER MÁS
      </Link>
    </div>
  )
}

export default Blog
