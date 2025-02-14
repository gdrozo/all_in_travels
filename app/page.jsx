import Banner from '@/components/Banner'
import Header from '@/components/Header'
import Info from '@/components/Info'
import Image from 'next/image'
import Link from 'next/link'

export default function NavigationMenuDemo() {
  return (
    <main className='w-100dvw min-h-dvh overflow-hidden flex flex-col justify-center items-center'>
      <Header></Header>
      <Banner></Banner>
      <Info title='NOSOTROS'>
        <p className='font-thin text-3xl max-w-[1325px] text-justify w-dvw '>
          Un copy cercano como hablandole a un amigo. Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
          ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
          lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
          iriure dolor in hendrerit in vulputate velit esse molestie consequat,
          vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
          et iusto odio dignissim qui blandit praesent luptatum zzril delenit
          augue duis dolore te feugait nulla facilisi.
        </p>
        <div className='grid grid-cols-[43.5rem_1fr] w-full'>
          <Link
            href={'https://www.instagram.com/churroceballos/'}
            className='flex items-center gap-6 justify-end'
          >
            <Image
              src='/instagram.png'
              alt='instagram'
              width={50}
              height={50}
            />
            <div>
              <Image
                src={'/nosotros_1.png'}
                alt='nosotros'
                width={400}
                height={400}
                className='w-[400px] h-[400px]'
              />
              <div className='font-thin text-secondary-color text-2xl pt-4'>
                @churroceballos
              </div>
            </div>
          </Link>
          <ImageCarousel />
        </div>
      </Info>
      <Info title={'EXPERIENCIAS GRUPALES'}></Info>
      <Info title={'EXPERIENCIAS PERSONALIZADAS'}></Info>
    </main>
  )
}

function ImageCarousel() {
  return (
    <div className='flex pl-16'>
      <Image
        src='/nosotros_2.png'
        alt='nosotros'
        width={400}
        height={400}
        className='w-[400px] h-[400px]'
      />
      <Image
        src='/nosotros_3.png'
        alt='nosotros'
        width={400}
        height={400}
        className='w-[400px] h-[400px]'
      />
      <Image
        src='/nosotros_4.png'
        alt='nosotros'
        width={400}
        height={400}
        className='w-[400px] h-[400px]'
      />
    </div>
  )
}
