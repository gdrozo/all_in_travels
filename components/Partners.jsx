import React from 'react'
import Info from './Info'
import Image from 'next/image'

async function Partners() {
  const partners = await (
    await fetch('https://api.test.interactiva.net.co/api/get-partners/')
  ).json()

  console.log('partners[0]', partners[0])
  return (
    <div className='pt-20'>
      <Info title={'ALIANZAS ESTRATÉGICAS'}>
        <div className='flex flex-wrap justify-center items-center gap-8 pb-28 pt-10'>
          <Image
            width={207}
            height={50}
            alt={partners[6].name}
            src={'https://api.test.interactiva.net.co' + partners[6].logo}
          ></Image>
          <Image
            width={191}
            height={115}
            alt={partners[5].name}
            src={'https://api.test.interactiva.net.co' + partners[5].logo}
          ></Image>
          <Image
            width={115}
            height={41}
            alt={partners[4].name}
            src={'https://api.test.interactiva.net.co' + partners[4].logo}
          ></Image>
          <Image
            width={221}
            height={142}
            alt={partners[3].name}
            src={'/logo4.png'}
          ></Image>
          <Divider />
          <Image
            width={295}
            height={91}
            alt={partners[2].name}
            src={'https://api.test.interactiva.net.co' + partners[2].logo}
          ></Image>
          <Divider />
          <Image
            width={103}
            height={61}
            alt={partners[0].name}
            src={'https://api.test.interactiva.net.co' + partners[0].logo}
          ></Image>
          <Image
            width={217}
            height={57}
            alt={partners[1].name}
            src={'https://api.test.interactiva.net.co' + partners[1].logo}
          ></Image>
        </div>
      </Info>
    </div>
  )
}

export default Partners

function Divider() {
  return <div className='h-20 w-px bg-secondary-color hidden sm:block'></div>
}
