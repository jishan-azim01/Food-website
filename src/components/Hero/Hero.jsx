// eslint-disable-next-line no-unused-vars
import React from 'react'
import HeroImg from "../../assets/3.png"

const Hero = () => {
  return (
    <div>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]'>
        {/* text section  */}
        <div className='flex flex-col justify-center items-center gap-8 md:text-left pt-24 md:p-0 pb-10'>
            <h1 className='text-4xl lg:text-6xl font-semibold text-secondary'>
            Savor the Moment, <span className='text-primary'>One Dish at a Time</span> 
            </h1>
            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint placeat corrupti minima aut laboriosam a reprehenderit provident quos! Impedit nulla</p>
            <div className='flex gap-4 items-center md:justify-start justify-center text-center md:text-left pt-24 md:p-0 pb-4'>
                <button className='primary-btn hover:scale-105 duration-200'>Food Menu</button>
                <button className='secondary-btn text-black hover:scale-105 duration-200'>Book Table</button>
            </div>
        </div>
        {/* image seaction */}
        <div className='flex flex-col justify-center'>
            <img src={HeroImg} alt="" className='animate-spin-slow img-shadow max-w-[600px] w-[340px] mx-auto' />
        </div>
      </div>
    </div>
  )
}

export default Hero
