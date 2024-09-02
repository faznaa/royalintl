import { InfiniteMovingCards } from 'components/ui/InfiniteMovingCards'
import React from 'react'

export default function TrustedByLeaders() {
    const items = [
        {name:'Facebook',src:'https://cdn.logojoy.com/wp-content/uploads/20230921104947/Facebook-logo-1-600x319.png'},
        {name:'bloomberg',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnV374FYLiybGplWw9E-yUR9h1TeGS21u3g&s'},
        {name:'Twitter',src:'https://cdn.logojoy.com/wp-content/uploads/20230921104947/Facebook-logo-1-600x319.png'},
        {name:'Company A',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnV374FYLiybGplWw9E-yUR9h1TeGS21u3g&s'},
        {name:'Company C',src:'https://cdn.logojoy.com/wp-content/uploads/20230921104947/Facebook-logo-1-600x319.png'},
        {name:'Company D',src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwnV374FYLiybGplWw9E-yUR9h1TeGS21u3g&s'}
    ]
  return (

          <div className="h-[40rem] py-10 rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
          <h1 className=' text-xl sm:text-4xl text-white font-medium text-center my-20 sm:mt-40 '>Trusted By Leaders</h1>
      <InfiniteMovingCards
        items={items}
        direction="right"
        speed="slow"
      />
    </div>
  )
}
