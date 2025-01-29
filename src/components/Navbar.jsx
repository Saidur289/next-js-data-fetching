import Link from 'next/link'
import React from 'react'

export default function () {
  return (
    <div>
        <nav className='flex justify-center'>
            <ul className="flex justify-between w-1/2">
            <li><Link href={'/'}>HOME</Link></li>
            <li><Link href={'/posts'}>POST</Link></li>
            <li><Link href={'/meals'}>MEALS</Link></li>
            <li><Link href={'/products'}>Products</Link></li>
            <li><Link href={'/products/add'}>Add Products</Link></li>
            </ul>

        </nav>
    </div>
  )
}
