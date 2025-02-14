import Banner from '@/components/Banner'
import Blog from '@/components/Blog'
import Header from '@/components/Header'
import Info from '@/components/Info'
import Packet from '@/components/Packet'
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
        <div className='h-px max-w-[1325px] bg-secondary-color w-[min(1325px,100dvw)]'></div>
      </Info>
      <Info title={'EXPERIENCIAS GRUPALES'}>
        <div className='flex'>
          <Packet
            title={'SAFARI (ÁFRICA)'}
            date={'5 AL 15 DE ABRIL'}
            price={'DESDE 5.500 USD'}
            description={
              'Serengueti, viaje en globo, hotel todo incluido 4 estrellas. Vive la experiencia de conocer los 4 reyes de la sabana africana.'
            }
            url={'paquetes/safari'}
            path={'/exp_grupales_1.png'}
            alt={'viajes'}
            state={{ name: '¡ÚLTIMOS CUPOS!' }}
          />
          <Packet
            title={'SAFARI (ÁFRICA)'}
            date={'5 AL 15 DE ABRIL'}
            price={'DESDE 5.500 USD'}
            description={
              'Serengueti, viaje en globo, hotel todo incluido 4 estrellas. Vive la experiencia de conocer los 4 reyes de la sabana africana.'
            }
            url={'paquetes/safari'}
            path={'/exp_grupales_2.png'}
            alt={'viajes'}
            state={{ name: 'AGOTADO', color: '#c1272d' }}
          />
          <Packet
            title={'SAFARI (ÁFRICA)'}
            date={'5 AL 15 DE ABRIL'}
            price={'DESDE 5.500 USD'}
            description={
              'Serengueti, viaje en globo, hotel todo incluido 4 estrellas. Vive la experiencia de conocer los 4 reyes de la sabana africana.'
            }
            url={'paquetes/safari'}
            path={'/exp_grupales_3.png'}
            alt={'viajes'}
            state={{ name: 'CUPOS DISPONIBLES', color: '#009245' }}
          />
        </div>
      </Info>
      <Info title={'EXPERIENCIAS PERSONALIZADAS'}>
        <div className='flex items-center justify-center gap-10 max-w-[94rem] w-dvw pb-32'>
          <Image
            src={'/exp_personalizadas.png'}
            width={517}
            height={672}
            alt='machu-picchu'
          ></Image>
          <div>
            <h2 className='text-4xl font-bold'>¿QUÉ NOS HACE DIFERENTES?</h2>
            <p className='font-thin text-3xl text-justify pt-10'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
            <div className='py-16'>
              <Link
                href={'/cotizacion'}
                className='text-white bg-secondary-color py-6 px-12 rounded-xl font-black text-2xl'
              >
                COTIZAR MI VIAJE
              </Link>
            </div>
          </div>
        </div>
      </Info>
      <div className='w-dvw overflow-hiddens flex flex-col justify-end items-center bg-secondary-color pb-20'>
        <h2 className='text-white font-bold text-4xl tracking-[0.5em] max-w-[1325px] py-20'>
          BLOGS
        </h2>
        <div className='flex gap-14 items-stretch'>
          <Blog
            path={'/blogs_1.png'}
            tittle={'DESTINOS PARA PAREJAS EN 2025'}
            url={'/blogs/1555151'}
          >
            <p className='font-thin text-xl text-justify w-[32rem]'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam...
            </p>
          </Blog>
          <div className='flex flex-col justify-between'>
            <Blog
              path={'/blogs_2.png'}
              tittle={'VUELVE LA VISA PARA VIAJAR A LONDRES'}
              url={'/blogs/1555151'}
            ></Blog>
            <Blog
              path={'/blogs_3.png'}
              tittle={'TOP 3 DESTINOS EN COLOMBIA'}
              url={'/blogs/1555151'}
            >
              <div className='h-2'></div>
            </Blog>
          </div>
        </div>
      </div>
      <div className='bg-[#e6e6e6]'>
        <Info title={'DISEÑA TU VIAJE'}>
          <div className='w-[1325px] flex flex-col justify-start gap-10'>
            <h3 className='text-2xl font-black '>
              AQUÍ COMIENZA TU EXPERIENCIA
            </h3>
            <div className='text-3xl text-justify'>
              Una vez llenado este formulario, uno de nuestros planners
              travelers se pondra en contacto contigo para perfeccionar ese
              viaje que tanto has soñado. Estamos aquí para brindarte la mejor
              experiencia.
            </div>
          </div>
        </Info>
      </div>
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
