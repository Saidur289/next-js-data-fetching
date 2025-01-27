'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function MealInput() {
    const [search, setSearch] = useState('')
    const router = useRouter()
    const pathname = usePathname()
    useEffect(() => {
        const searchQuery = {search}
        const urlQueryParam = new URLSearchParams(searchQuery)
        const url = `${pathname}?${urlQueryParam}`
        router.push(url)
    }, [search])
  return (
    <div className='text-center'>
        <input type="text" className='text-black py-3 bg-gray-200' value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}
