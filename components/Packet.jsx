import Image from 'next/image'
import Link from 'next/link'

function Packet({ path, alt, title, date, price, description, url, state }) {
  return (
    <div className='flex flex-col p-10'>
      <div className='z-10 rounded-3xl shadow max-w-[450px]'>
        <Image
          src={path}
          width={451}
          height={450}
          alt={alt}
          className='w-[451px] h-[450px] object-fill '
        />
        <div
          className='bg-secondary-color font-bold text-white flex items-center justify-center py-1 max-w-[450px] '
          style={{ backgroundColor: state?.color }}
        >
          {state.name}
        </div>
        <div className='bg-white flex flex-col items-center justify-center p-6 gap-2 z-10 max-w-[450px] rounded-3xl'>
          <div className='font-black text-2xl'>{title}</div>
          <div className='text-secondary-color font-semibold text-lg'>
            {date} | {price}
          </div>
          <p className='text-center text-lg'>{description}</p>
        </div>
      </div>
      <div className='h-20 w-full bg-secondary-color -mt-20'></div>
      <Link
        href={url}
        className='bg-secondary-color w-full text-white py-6 text-center font-black underline text-2xl rounded-b-3xl'
      >
        MÁS INFORMACIÓN
      </Link>
    </div>
  )
}

export default Packet
