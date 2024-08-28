import { Figure } from 'components/Figure'
import React from 'react'

const FigureCaption = ({children}:any) => <div className='text-gray-700 text-sm uppercase tracking-normal'>{children}</div>


export default function Continents() {
  return (
    <div className='bg-white text-black h-full w-full min-h-screen px-10 py-32 text-center'>
        <h1 className=' text-xl sm:text-4xl font-medium '>We cover all continents</h1>
        <p className='text-md sm:max-w-sm text-gray-400 mx-auto py-6'>Over the last 15 years , we've grown into an international relocation company with a presence of 20+ partners aroudn the world.</p>
        <div className='h-[400px] w-3/4 mx-auto overflow-hidden'>
        <img src="https://img.freepik.com/premium-vector/dotted-world-map-with-continents_79145-1005.jpg"
        className='w-full object-cover'/>
        </div>
        <div className='w-full sm:max-w-5xl  mx-auto mt-16'>
            <div className='grid grid-cols-4 justify-between text-center'>
            <div className=''>
                    <Figure>146 K</Figure>
                    <FigureCaption>Home moving</FigureCaption>
                </div>
                <div>
                    <Figure>146 K</Figure>
                    <FigureCaption>Home moving</FigureCaption>
                </div>
                <div className=''>
                    <Figure>146 K</Figure>
                    <FigureCaption>Home moving</FigureCaption>
                </div>
                <div>
                    <Figure>146 K</Figure>
                    <FigureCaption>Home moving</FigureCaption>
                </div>
            </div>
        </div>
        <div className='text-gray-400 mx-auto text-center mt-10'>
            Packages moved across globe.
        </div>


        <h1 className=' text-xl sm:text-4xl font-medium mt-20'>What sets us apart</h1>

    </div>
  )
}
