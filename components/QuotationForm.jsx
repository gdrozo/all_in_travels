'use client'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Button } from './ui/button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import * as React from 'react'
import { format, set } from 'date-fns'

import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const formSchema = z.object({
  travel: z.enum(['1', '2', '3'], {
    errorMap: (issue, ctx) => ({
      message: 'Se requiere el destino principal. Seleccione un destino.',
    }),
  }),
  secondaryDestination: z
    .enum(['europe', 'north america', 'africa', 'asia', ''])
    .optional(),
  tags: z.string({
    message: 'Please select at least one experience to continue.',
  }),
  knowWhenToTravel: z.enum(['yes', 'no'], {
    required_error: 'Please specify if you know when to travel.',
  }),
  date_start: z.string().date(),
  date_end: z.string().date(),
  number_children: z
    .number()
    .min(0, {
      message: 'Number of children cannot be less than 0.',
    })
    .default(0),
  number_adults: z
    .number()
    .min(1, {
      message: 'Number of adults must be at least 1.',
    })
    .default(1),
  idealTripDescription: z.string().optional(),
})

export default function QuotationForm() {
  const [tags, setTags] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.test.interactiva.net.co/api/get-tags/')
      .then(response => response.json())
      .then(data => {
        setTags(data)
      })
  }, [])

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      travel: '',
      secondaryDestination: '',
      tags: '',
      knowWhenToTravel: 'yes',
      date_start: '',
      date_end: '',
      number_children: 0,
      number_adults: 1,
      idealTripDescription: '',
    },
  })

  const onSubmit = values => {
    console.log(values)
    fetch('https://api.test.interactiva.net.co/api/set-quotations/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data)
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  const [departure, setDeparture] = React.useState()
  const [date_end, setArrivalDate] = React.useState()

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-8 px-5'
        >
          <div className='grid sm:grid-cols-2 gap-8 '>
            <FormField
              control={form.control}
              id='travel'
              name='travel'
              render={({ field }) => (
                <FormItem className='flex-grow flex flex-col items-center'>
                  <FormLabel className='text-base sm:text-2xl font-thin py-1'>
                    ¿CUÁL ES EL DESTINO QUE QUIERES VISITAR?
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className='bg-white text-base sm:text-2xl p-7'>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='1'>Europe</SelectItem>
                        <SelectItem value='2'>Africa</SelectItem>
                        <SelectItem value='3'>Asia</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='secondaryDestination'
              render={({ field }) => (
                <FormItem className='flex-grow flex flex-col items-center'>
                  <FormLabel className='text-base sm:text-2xl font-thin py-1'>
                    ¿QUÉ OTRO DESTINO TIENES EN MENTE?
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className='bg-white text-base sm:text-2xl p-7'>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='europe'>Europe</SelectItem>
                        <SelectItem value='north america'>
                          North America
                        </SelectItem>
                        <SelectItem value='africa'>Africa</SelectItem>
                        <SelectItem value='asia'>Asia</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='w-full'>
            <FormField
              control={form.control}
              name='tags'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base sm:text-2xl font-thin text-center '>
                    ¿QUÉ EXPERIENCIAS QUIERES VIVIR?
                  </FormLabel>
                  <FormControl>
                    <ToggleGroup
                      className='grid sm:grid-cols-3 grid-cols-2 gap-8 my-5'
                      type='single'
                      onValueChange={tag => {
                        console.log('tag', tag)
                        field.onChange(tag)
                      }}
                    >
                      {tags.map(tag => (
                        <ToggleGroupItem
                          className='bg-white text-base sm:text-3xl font-thin p-8 data-[state=on]:text-black text-black/50'
                          value={tag.id}
                          aria-label={tag.name}
                          key={tag.id}
                        >
                          {tag.name}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='w-full flex items-center flex-wrap justify-between gap-10'>
            <FormField
              control={form.control}
              name='knowWhenToTravel'
              id='knowWhenToTravel'
              defaultValue='yes'
              render={({ field }) => (
                <FormItem className='flex items-center gap-20'>
                  <FormLabel className='text-base sm:text-2xl font-thin py-1'>
                    ¿SABES CUÁNDO VIAJAR?
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      className='flex items-center gap-2'
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem
                          value='yes'
                          id='SI'
                          className='border-none bg-white sm:size-8 size-6'
                        />
                        <Label
                          htmlFor='r1'
                          className='text-base sm:text-2xl font-thin'
                        >
                          SI
                        </Label>
                      </div>
                      <div className='flex items-center space-x-2 pl-5'>
                        <RadioGroupItem
                          value='no'
                          id='NO'
                          className='border-none bg-white sm:size-8 size-6'
                        />
                        <Label
                          htmlFor='r2'
                          className='text-base sm:text-2xl font-thin'
                        >
                          NO
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='date_start'
              render={({ field }) => (
                <FormItem className='flex items-center gap-1'>
                  <FormLabel className='text-base sm:text-2xl font-thin p-2'>
                    IDA:
                  </FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'justify-start text-left font-normal bg-white text-2xl p-7 w-48 overflow-hidden',
                            !departure && 'text-muted-foreground'
                          )}
                        >
                          {departure ? format(departure, 'PPP') : ''}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0'>
                        <Calendar
                          mode='single'
                          selected={departure}
                          onSelect={d => {
                            setDeparture(d)
                            field.onChange(d.toISOString().split('T')[0])
                          }}
                          initialFocus
                          onValueChange={field.onChange}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='date_end'
              render={({ field }) => (
                <FormItem className='flex items-center gap-1'>
                  <FormLabel className='text-base sm:text-2xl font-thin p-2'>
                    REGRESO:
                  </FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'justify-start text-left font-normal bg-white text-2xl p-7 w-48 overflow-hidden',
                            !date_end && 'text-muted-foreground'
                          )}
                        >
                          {date_end ? format(date_end, 'PPP') : ''}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0'>
                        <Calendar
                          mode='single'
                          selected={date_end}
                          onSelect={d => {
                            setArrivalDate(d)
                            field.onChange(d.toISOString().split('T')[0])
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='number_children'
              render={({ field }) => (
                <FormItem className='flex items-center gap-2'>
                  <FormLabel className='text-base sm:text-2xl font-thin py-1'>
                    NIÑOS:
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      min='0'
                      className='bg-white text-base sm:text-2xl p-7'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='number_adults'
              render={({ field }) => (
                <FormItem className='flex items-center gap-2'>
                  <FormLabel className='text-base sm:text-2xl font-thin py-1'>
                    ADULTOS:
                  </FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      min='1'
                      className='bg-white text-base sm:text-2xl p-7'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex-grow'></div>
          </div>

          <FormField
            control={form.control}
            name='idealTripDescription'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-base sm:text-2xl font-thin py-1'>
                  TU VIAJE IDEAL...
                </FormLabel>
                <FormControl>
                  <Textarea {...field} className='bg-white mt-2' rows={7} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormItem className='flex justify-center'>
            <Button
              type='submit'
              className='bg-secondary-color font-black text-lg sm:text-3xl  py-10 px-20 my-14 shadow-none'
            >
              Enviar
            </Button>
          </FormItem>
        </form>
      </Form>
    </div>
  )
}
