import React from 'react'
import { getProducts } from '../actions/prodeucts/getProducts'
export const dynamic = 'force-dynamic'
export default async function ProductPage() {
  const data = await getProducts()
  // const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env
    // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`)
    // const {data} = await res.json()
    // console.log(data);
    // , {cache: 'force-cache'}  use for when not load data
  return (
    <div className='flex justify-center'>
       
     
        <ul className='mt-5'>
            {data.map((p) => <li key={p._id}>{p?.title}</li>)}
        </ul>
    </div>
  )
}
