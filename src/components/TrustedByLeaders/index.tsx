import { InfiniteMovingCards } from 'components/ui/InfiniteMovingCards'
import React from 'react'

export default function TrustedByLeaders() {
    const items = [
        {name:'Facebook',src:'companies/1.png'},
        {name:'bloomberg',src:'companies/2.png'},
        {name:'Twitter',src:'companies/3.png'},
        {name:'Company A',src:'companies/4.png'},
        {name:'Company C',src:'companies/5.png'},
        {name:'Company D',src:'companies/6.png'}
    ]
  return (

          <div className="h-[30rem] py-28 rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
          <h1 className=' text-xl sm:text-4xl text-white font-medium text-center my-10  '>Trusted By Leaders</h1>
      <InfiniteMovingCards
        items={items}
        direction="right"
        speed="slow"
      />
    </div>
  )
}
