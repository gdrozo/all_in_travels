import React from 'react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import Image from 'next/image'

function Header() {
  return (
    <header className='w-full flex justify-between items-center px-16 py-10 absolute top-0 left-0 z-10'>
      <Link href='/' legacyBehavior passHref className='cursor-pointer'>
        <Image
          className=' w-64'
          src='/logo.png'
          alt='all in travels Logo'
          width={500}
          height={500}
        />
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href='/ ' legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  'font-bold inline-flex h-9  items-center justify-center rounded-md bg-background px-4 mx-10 py-2 text-base transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                }
              >
                Inicio
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/Nosotros' legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  'font-light inline-flex h-9  items-center justify-center rounded-md bg-background px-4 mx-10 py-2 text-base  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                }
              >
                Nosotros
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/Viajes' legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  'font-light inline-flex h-9  items-center justify-center rounded-md bg-background px-4 mx-10 py-2 text-base  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                }
              >
                Viajes
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/Blogs' legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  'font-light inline-flex h-9  items-center justify-center rounded-md bg-background px-4 mx-10 py-2 text-base  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                }
              >
                Blogs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/docs' legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  'font-light inline-flex h-9  items-center justify-center rounded-md bg-background px-4 mx-10 py-2 text-base  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                }
              >
                Contacto
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default Header
