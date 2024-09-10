import { InfiniteMovingCards } from 'components/ui/InfiniteMovingCards'
import React from 'react'

export default function TrustedByLeaders() {
  const items = [
    { name: 'Accenture', src: 'companies/accenture.png' },
    { name: 'Adobe', src: 'companies/adobe.png' },
    { name: 'Airtel', src: 'companies/airtel.png' },
    { name: 'Amazon', src: 'companies/amazon.png' },
    { name: 'Benz', src: 'companies/benz.png' },
    { name: 'EY', src: 'companies/ey.png' },
    { name: 'GE Healthcare', src: 'companies/ge_healthcare.png' },
    { name: 'JP Morgan', src: 'companies/jpmorgan.png' },
    { name: 'KPMG', src: 'companies/kpmg.png' },
    { name: 'L&T', src: 'companies/lt.png' },
    { name: 'Signify', src: 'companies/signify.png' },
    { name: 'Vodafone', src: 'companies/vodafone.png' },
    { name: 'Walmart', src: 'companies/walmart.png' },
    { name: 'Wipro', src: 'companies/wipro.png' }
];

  return (

    <div className="h-[30rem] py-28 rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
    <h1 className=' text-6xl text-white text-center my-10  '>Trusted By Leaders</h1>
<InfiniteMovingCards
  items={items}
  direction="right"
  speed="fast" // after changed the initial position of the moving container, it moves very slowly. so i changed this fast
/>
</div>
  )
}
