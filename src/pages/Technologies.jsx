import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import MarqueeTech from '../components/Marquee/MarqueeTech'
import MarqueeTools from '../components/Marquee/MarqueeTools'

const Technologies = () => {
  return (
    <div className='mx-14 mt-2 h-[90vh]'>
        <div className='flex gap-2 h-full'>

            {/* Top Section */}
            <div className='w-full h-[80%] relative'>
                <h1 className='text-[5rem] capitalize font-semibold'>Technologies</h1>
                <MarqueeTech />
                <div className='flex flex-col mt-10 w-full relative'>
                  <MarqueeTools />
                  <h1 className='text-[4rem] font-semibold items-end absolute -bottom-[90px] right-0'>Tools Used</h1>
                </div>
                <h3 className='absolute right-0 -bottom-[100px] flex text-[1.5rem] gap-1 items-center cursor-pointer hover:text-black text-[#7B7B7B] font-semibold duration-300 ease-in-out transition-all'>
                  Further
                  <FaArrowDown />
                </h3>
            </div>
        </div>
    </div>
  )
}

export default Technologies