import React from 'react'
import Info from './Info'
import Image from 'next/image'
import Link from 'next/link'

async function Experiences() {
  const experience = (
    await (
      await fetch(
        'https://api.test.interactiva.net.co/api/get-customer_experiences/'
      )
    ).json()
  )[0]

  return (
    <Info title={experience.title}>
      <div className='flex items-center flex-wrap justify-center gap-10 max-w-[94rem] w-dvw pb-32 '>
        <Image
          src={'https://api.test.interactiva.net.co' + experience.image}
          width={517}
          height={672}
          alt={experience.title}
          className='mt-10'
        ></Image>
        <div>
          <h2 className=' font-bold text-lg text-center md:text-4xl'>
            {experience.description}
          </h2>
          <p className='font-thin px-5 lg:px-0 text-justify pt-10 sm:text-3xl text-xl'>
            {experience.diference_description}
          </p>
          <div className='py-10 sm:py-16 flex justify-center'>
            <Link
              href={'/cotizacion'}
              className='text-white bg-secondary-color py-6 px-12 rounded-xl font-black sm:text-2xl'
            >
              COTIZAR MI VIAJE
            </Link>
          </div>
        </div>
      </div>
    </Info>
  )
}

export default Experiences
