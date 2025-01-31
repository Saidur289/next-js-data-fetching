'use client'
import React from 'react'
import {signIn} from 'next-auth/react'
export default function LoginButton() {
  return (
    <div>
        <button onClick={() => signIn()} className='px-5 py-2 rounded-md bg-green-800 text-white'>Login</button>
    </div>
  )
}
