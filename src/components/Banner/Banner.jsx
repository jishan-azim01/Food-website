// eslint-disable-next-line no-unused-vars
import React from 'react';
import BannerImg from '../../assets/2.png'

const Banner = () => {
  return (
    <div>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* image selection */}
            <div className='flex justify-center items-center'>
                <img src={BannerImg} alt="" />
            </div>
            {/* text selection  */}
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl font-semibold'>Food Is Always Good</h1>
                <p className='py-4 text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic, magni at iusto aliquid veniam perferendis, illo quidem consectetur quis cumque in nesciunt, modi ex iure. Pariatur magni alias cum.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
