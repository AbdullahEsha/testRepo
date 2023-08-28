import DashboardUtil from '@/components/user-dashboard/DashboardUtil'
import MyReturn from '@/components/user-dashboard/MyReturn'
import React from 'react'

const MyReturns = () => {
  return (
    <div className='container my-10 flex flex-col gap-y-4'>
        <h2 className='text-xl font-semibold'>Hello, Sadit Shekh</h2>
        <DashboardUtil />
        <MyReturn />
    </div>
  )
}

export default MyReturns