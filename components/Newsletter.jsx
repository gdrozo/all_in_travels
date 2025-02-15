'use client'

import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  email: z.string().email(),
})

function Newsletter() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = values => {
    console.log(values)
  }

  return (
    <div className='bg-[#1b233d] w-full flex flex-col justify-center items-center py-10 sm:py-20 gap-5'>
      <div className='text-white text-lg sm:text-3xl font-thin text-center'>
        Suscríbete a nuestro newsletter y recibe noticias, descuentos y más
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-8'
        >
          <FormField
            control={form.control}
            name='numberOfAdults'
            render={({ field }) => (
              <FormItem className='flex justify-center'>
                <FormControl>
                  <Input
                    name='email'
                    type='email'
                    className='w-[min(57rem,90dvw)] bg-white text-lg sm:text-3xl placeholder:text-black/30 font-thin p-8'
                    placeholder='Correo electrónico'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem className='flex justify-center'>
            <Button
              type='submit'
              className='bg-secondary-color font-black py-8 px-10 sm:py-10 sm:px-20 mt-4 shadow-none rounded-2xl text-lg sm:text-3xl'
            >
              SUSCRIBIRME
            </Button>
          </FormItem>
        </form>
      </Form>
    </div>
  )
}

export default Newsletter
