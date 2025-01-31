'use client'
import React from 'react'
import {registerUser} from '@/app/actions/auth/registerUser'

export default function RegisterPage() {
    const handleRegister = async(e) => {
        e.preventDefault()
        const username = e.target.name.value 
        const password = e.target.password.value 
        const payload = {username, password}
        console.log(payload);
        const result = await registerUser(payload)
        console.log(result);
    }
  return (
    <div className='mt-5 flex items-center justify-center'>
        <form onSubmit={handleRegister}>
            <label htmlFor="username" className='block'>Your Name</label>
            <input type="text"  name="name" className='text-black bg-gray-200 py-2 px-3' id="" />
            <label htmlFor="username" className='block'>Password</label>
            <input type="password"  name="password" className='text-black bg-gray-200 py-2 px-3' id="" />
            <br />
            <input type="submit" value="Register" />
        </form>
    </div>
  )
}
