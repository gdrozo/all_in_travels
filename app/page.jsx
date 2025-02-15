import Partners from '@/components/Partners'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Info from '@/components/Info'
import InstagramFeed from '@/components/InstagramFeed'
import Newsletter from '@/components/Newsletter'
import Travel from '@/components/Travel'
import Quotation from '@/components/Quotation'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Blogs from '@/components/Blogs'
import Travels from '@/components/Travels'
import Experiences from '@/components/Experiences'

export default async function NavigationMenuDemo() {
  const company = (
    await (
      await fetch('https://api.test.interactiva.net.co/api/get-companies/')
    ).json()
  )[0]

  return (
    <main className='w-dvw min-h-dvh overflow-hidden flex flex-col justify-start items-center'>
      <Header logo={company.logo} name={company.name}></Header>
      <Banner />
      <InstagramFeed />
      <Travels />
      <Experiences />
      <Blogs />
      <Quotation></Quotation>
      <Partners />
      <Newsletter />
      <Footer logo={company.logo} name={company.name} />
    </main>
  )
}
