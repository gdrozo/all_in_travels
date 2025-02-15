import Image from 'next/image'
import Link from 'next/link'

function Travel({ path, alt, title, date, price, description, url, state }) {
  return (
    <div className='flex flex-col p-10'>
      <div className='z-10 rounded-3xl shadow max-w-[450px] w-[min(450px,90dvw)]'>
        <Image
          src={path}
          width={451}
          height={450}
          alt={alt}
          className='w-[min(450px,90dvw)] object-fill '
        />
        <div
          className='bg-secondary-color font-bold text-white flex items-center justify-center py-1 max-w-[450px] text-center '
          style={{ backgroundColor: state?.color }}
        >
          {state.name}
        </div>
        <div className='bg-white flex flex-col items-center justify-center p-6 gap-2 z-10 max-w-[450px] rounded-3xl'>
          <div className='font-black text-2xl text-center'>{title}</div>
          <div className='text-secondary-color font-semibold text-lg'>
            {date} | {price}
          </div>
          <p className='text-center text-lg'>{description}</p>
        </div>
      </div>
      <div className='h-20 w-[min(450px,90dvw)] bg-secondary-color -mt-20'></div>
      <Link
        href={url}
        className='bg-secondary-color text-white py-6 text-center font-black underline text-2xl rounded-b-3xl w-[min(450px,90dvw)]'
      >
        MÁS INFORMACIÓN
      </Link>
    </div>
  )
}

export default Travel
