import Image from 'next/image'
import React from 'react'

const MyOrder = () => {
  return (
    <div className='flex flex-col gap-y-6 text-gray-600'>
        <div className='rounded-lg border'>
            <div className='py-1 border-b'>
                <div className='px-4'>
                    <p>Order <span className='text-sky-500'>#3423438438473</span></p>
                    <p>Place on <span>4 jun 2023</span></p>
                </div>
            </div>
            <div className='flex justify-around items-center my-4 w-full lg:w-4/5'>
                <div className='flex gap-6 items-center'>
                    <Image
                    src="/images/category/bridal_top.png"
                    alt="My Image"
                    width={70}
                    height={60}
                    className='rounded-lg'
                    />
                    <p>Panache Apparel - BLUEBELL</p>
                </div>
                <p>QTY: 1</p>
                <button className='bg-gray-300 rounded-full py-1 text-sm px-2'>Cancelled</button>
            </div>
        </div>
        <div className='rounded-lg border'>
            <div className='py-1 border-b'>
                <div className='px-4'>
                    <p>Order <span className='text-sky-500'>#3423438438473</span></p>
                    <p>Place on <span>4 jun 2023</span></p>
                </div>
            </div>
            <div className='flex justify-around items-center my-4 w-full lg:w-4/5'>
                <div className='flex gap-6 items-center'>
                    <Image
                    src="/images/category/bridal_top.png"
                    alt="My Image"
                    width={70}
                    height={60}
                    className='rounded-lg'
                    />
                    <p>Panache Apparel - BLUEBELL</p>
                </div>
                <p>QTY: 1</p>
                <button className='bg-gray-300 rounded-full py-1 text-sm px-2'>Cancelled</button>
            </div>
        </div>
        <div className='rounded-lg border'>
            <div className='py-1 border-b'>
                <div className='px-4'>
                    <p>Order <span className='text-sky-500'>#3423438438473</span></p>
                    <p>Place on <span>4 jun 2023</span></p>
                </div>
            </div>
            <div className='flex justify-around items-center my-4 w-full lg:w-4/5'>
                <div className='flex gap-6 items-center'>
                    <Image
                    src="/images/category/bridal_top.png"
                    alt="My Image"
                    width={70}
                    height={60}
                    className='rounded-lg'
                    />
                    <p>Panache Apparel - BLUEBELL</p>
                </div>
                <p>QTY: 1</p>
                <button className='bg-gray-300 rounded-full py-1 text-sm px-2'>Cancelled</button>
            </div>
        </div>
    </div>
  )
}

export default MyOrder