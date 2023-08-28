"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const DashboardUtil = () => {
  const pathname = usePathname()
  return (
    <div className='flex gap-4 text-sm font-medium text-gray-600'>
        <Link href="/user-dashboard" passHref><button className={`${pathname === '/user-dashboard' && 'text-primary-hover-color'} text-sm`}>My profile</button></Link>
        <Link href="/user-dashboard/my-order" passHref><button className={`${pathname === '/user-dashboard/my-order' && 'text-primary-hover-color'} text-sm`}>My Order</button></Link>
        <Link href="/user-dashboard/my-return" passHref><button className={`${pathname === '/user-dashboard/my-return' && 'text-primary-hover-color'} text-sm`}>My Return</button></Link>
    </div>
  )
}

export default DashboardUtil