'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function () {
  const pathname = usePathname()
  if(!pathname.includes('/dashboard')){
    return (
      <div>
          <nav className='flex justify-center'>
              <ul className="flex justify-between w-1/2">
              <li><Link href={'/'}>HOME</Link></li>
              <li><Link href={'/posts'}>POST</Link></li>
              <li><Link href={'/meals'}>MEALS</Link></li>
              <li><Link href={'/products'}>Products</Link></li>
              <li><Link href={'/products/add'}>Add Products</Link></li>
              <li><Link href={'/register'}>Register</Link></li>
              </ul>
  
          </nav>
      </div>
    )
  }
  else{
    return <></>
  }
 
}
