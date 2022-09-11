import Image from 'next/image'
import React from 'react'

import { howToUseData } from '@/libs/howToUseData'

export const HomeHowToUseContents = () => {
  return (
    <section className='w-3/4'>
      {howToUseData.map((data: any) => (
        <div key={data.sentence} className='py-5'>
          <p className='py-3'>{data.sentence}</p>
          {data.images.map((image: any) => (
            <div key={image.src} className='block py-2'>
              <Image
                src={image.src}
                alt={image.alt}
                width='300'
                height={image.height}
                layout='responsive'
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}
