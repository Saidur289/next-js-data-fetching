'use client'
import React from 'react'

export default function ProductAddForm() {
    const handleSubmit = async(e) => {
        e.preventDefault()
        const form = e.target 
        const title = form.product.value 
        const payload = {title}
        const res = await fetch('http://localhost:3000/api/items', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await res.json()
        console.log(data);
        alert('product added')
        form.reset()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className='border-2 border-black py-3' type="text"  name="product" placeholder='Product Name' id="" />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
