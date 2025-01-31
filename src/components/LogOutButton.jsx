'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
export default function LogOutButton() {
  return (
    <div>
        <button onClick={() => signOut()} className='px-2 py-1 bg-blue-700 rounded-md text-white'>LogOut</button>
    </div>
  )
}
