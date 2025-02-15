import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer({ logo, name }) {
  return (
    <div className='grid sm:grid-cols-3 py-24'>
      <div className='flex  items-center flex-col gap-6'>
        <Image
          src={'https://api.test.interactiva.net.co' + logo}
          alt={name}
          width={247}
          height={60}
          className='object-contain'
        />
        <Image
          src={'/logos_redes.png'}
          width={476}
          height={80}
          alt='logos'
          className='object-contain w-60'
        ></Image>
      </div>
      <div className='grid sm:grid-cols-2'>
        <div className='flex flex-col gap-1'>
          <Link href={'/'} className='text-center'>
            Inicio
          </Link>
          <Link href={'/'} className='text-center'>
            ¿Quienes somos?
          </Link>
          <Link href={'/'} className='text-center'>
            Viajes grupales
          </Link>
          <Link href={'/'} className='text-center'>
            Viajes a la medida
          </Link>
          <Link href={'/'} className='text-center'>
            Contáctanos
          </Link>
          <Link href={'/'} className='text-center'>
            Alianzas estratégicas
          </Link>
          <Link href={'/'} className='text-center'>
            Blogs
          </Link>
          <Link href={'/'} className='text-center'>
            Términos y condiciones
          </Link>
          <Link href={'/'} className='text-center'>
            Política de privacidad
          </Link>
          <Link href={'/'} className='text-center'>
            Registro Nacional de Turismo
          </Link>
        </div>
        <div className=''>
          <Link
            href={'mailto:info@allintravels.com'}
            className='flex items-center justify-center gap-2'
          >
            <Image
              width={50}
              height={41}
              src='/icono_mail.png'
              className='h-3 object-contain w-min'
              alt='mail'
            ></Image>
            info@allintravels.com
          </Link>
          <div className='flex items-center justify-center gap-2'>
            <Image
              width={50}
              height={41}
              src='/icono_telefono.png'
              className='h-3 object-contain w-min'
              alt='phone'
            ></Image>
            0057 (604) 444 45 83
          </div>
          <div className='flex items-center justify-center gap-2'>
            <Image
              width={50}
              height={41}
              src='/icono_ubicacion.png'
              className='h-3 object-contain w-min'
              alt='location'
            ></Image>
            Carrera 43A # 18 Sur - 135 Of 834, Sao Paulo Plaza Medellín -
            Colombia.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
