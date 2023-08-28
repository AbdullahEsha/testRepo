import DashboardUtil from '@/components/user-dashboard/DashboardUtil'
import MyOrder from '@/components/user-dashboard/MyOrder'
import React from 'react'

const MyOrders = () => {
  return (
    <div className='container my-10 flex flex-col gap-y-4'>
      <h2 className='text-xl font-semibold'>Hello, Sadit Shekh</h2>
      <DashboardUtil />
      <MyOrder />
    </div>
  )
}

export default MyOrders