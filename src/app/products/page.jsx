import React from 'react'
export const dynamic = 'force-dynamic'
export default async function ProductPage() {
    const res = await fetch('http://localhost:3000/api/items')
    const {data} = await res.json()
    console.log(data);
    // , {cache: 'force-cache'}  use for when not load data
  return (
    <div className='flex justify-center'>
       
     
        <ul className='mt-5'>
            {data.map((p) => <li key={p._id}>{p?.title}</li>)}
        </ul>
    </div>
  )
}
