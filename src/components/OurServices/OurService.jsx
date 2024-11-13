// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MdFoodBank } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

const OurService = () => {
  return (
    <div className='container py-12'>
    {/* header section  */}
     <div className='text-center'>
        <h1 className='text-4xl font-semibold'>Our Services</h1>
     </div>
     {/* icon section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mt-12'>
        <div className='flex justify-center items-center gap-3'>
        <FaMobileScreen className='text-2xl' />
        <p className='text-xl font-semibol'>Online Booking</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
        <MdFastfood className='text-2xl' />
        <p className='text-xl font-semibol'>Fast food</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
        <MdFoodBank className='text-2xl' />
        <p className='text-xl font-semibol'>Healthy Food</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
        <TbTruckDelivery className='text-2xl' />
        <p className='text-xl font-semibol'>Delivery</p>
        </div>
      </div>
    </div>
  )
}

export default OurService
