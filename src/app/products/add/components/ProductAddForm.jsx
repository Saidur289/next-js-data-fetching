'use client'
import { postSingleProducts } from '@/app/actions/prodeucts/postSingleProducts'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ProductAddForm() {
    const route = useRouter()
    const {NEXT_PUBIC_SERVER_ADDRESS} = process.env
    const handleSubmit = async(e) => {
        e.preventDefault()
        const form = e.target 
        const title = form.product.value 
        const payload = {title}
        // const res = await fetch(`${NEXT_PUBIC_SERVER_ADDRESS}/api/items`, {
        //     method: 'POST',
        //     body: JSON.stringify(payload),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // })
        // const data = await res.json()
        // console.log(data);
        const result = await postSingleProducts(payload)
        console.log(result);
        alert('product added')
        form.reset()
        route.push('/products')
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
