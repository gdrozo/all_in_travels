import React from 'react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import Image from 'next/image'
import { Button } from './ui/button'

function Header({ logo, name }) {
  return (
    <header className='flex justify-between items-center md:px-16 md:py-10 pb-5 absolute top-5 left-5 right-5 z-10 overflow-hidden'>
      <Link href='/' legacyBehavior passHref className='cursor-pointer'>
        <Image
          className='mb:w-64 w-36'
          src={'https://api.test.interactiva.net.co' + logo}
          alt={name}
          width={500}
          height={500}
        />
      </Link>

      <NavigationMenu>
        <NavigationMenuList className='hidden lg:flex'>
          <NavigationMenuItem>
            <Link href='/ ' legacyBehavior passHref>
              <NavigationMenuLink
                className={
                  'font-bold inline-flex h-9  items-center justify-center rounded-md bg-background px-4 lg:mx-6 xl:mx-10 py-2 text-base transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
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
                  'font-light inline-flex h-9  items-center justify-center rounded-md bg-background px-4 lg:mx-6 xl:mx-10 py-2 text-base  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
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
                  'font-light inline-flex h-9  items-center justify-center rounded-md bg-background px-4 lg:mx-6 xl:mx-10 py-2 text-base  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
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
                  'font-light inline-flex h-9  items-center justify-center rounded-md bg-background px-4 lg:mx-6 xl:mx-10 py-2 text-base  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
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
                  'font-light inline-flex h-9  items-center justify-center rounded-md bg-background px-4 lg:mx-6 xl:mx-10 py-2 text-base  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                }
              >
                Contacto
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Drawer>
        <DrawerTrigger className='w-min lg:hidden '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerDescription className='flex justify-center'>
              <NavigationMenu className='flex justify-center'>
                <NavigationMenuList className='flex flex-col items-center'>
                  <NavigationMenuItem>
                    <Link href='/ ' legacyBehavior passHref>
                      <NavigationMenuLink
                        className={
                          'font-bold inline-flex h-9  items-center justify-center rounded-md bg-background px-4 lg:mx-6 xl:mx-10 py-2 text-base transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
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
                          'font-light inline-flex h-9  items-center justify-center rounded-md bg-background px-4 lg:mx-6 xl:mx-10 py-2 text-base  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
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
                          'font-light inline-flex h-9  items-center justify-center rounded-md bg-background px-4 lg:mx-6 xl:mx-10 py-2 text-base  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
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
                          'font-light inline-flex h-9  items-center justify-center rounded-md bg-background px-4 lg:mx-6 xl:mx-10 py-2 text-base  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
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
                          'font-light inline-flex h-9  items-center justify-center rounded-md bg-background px-4 lg:mx-6 xl:mx-10 py-2 text-base  transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                        }
                      >
                        Contacto
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant='outline'>Cerrar</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  )
}

export default Header
