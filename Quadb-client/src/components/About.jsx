import React from 'react'

const About = () => {
  return (
    <div className='flex justify-between text-base md:text-xl items-center pb-5'>
        <div className='text-stone-400'>
            <h1 className='text-[#5dc7c2] text-xl md:text-4xl py-1 font-semibold'>0.21%</h1>
            <p >5 Mins</p>
        </div>
        <div className='text-stone-400'>
            <h1 className='text-[#5dc7c2] text-xl md:text-4xl py-1 font-semibold'>0.64 %</h1>
            <p >1 Hour</p>
        </div>
        <div className='text-stone-400'>
            <h1 className='text-white text-3xl md:text-7xl  py-5 font-semibold'>₹ 24,74,267</h1>
            <p className='text-sm md:text-lg'>Average BTC/INR net price including commission</p>
        </div>
        <div className='text-stone-400'>
            <h1 className='text-[#5dc7c2] text-xl md:text-4xl py-1 font-semibold'>4.34 %</h1>
            <p >1 Day</p>
        </div>
        <div className='text-stone-400'>
            <h1 className='text-[#5dc7c2] text-xl md:text-4xll py-1 font-semibold'>10.02 %</h1>
            <p >7 Days</p>
        </div>
      
    </div>
  )
}

export default About
