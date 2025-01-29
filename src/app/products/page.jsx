import React from 'react'

export default async function ProductPage() {
    const res = await fetch('http://localhost:3000/api/items', {cache: 'force-cache'})
    const {data} = await res.json()
    console.log(data);

  return (
    <div className='flex justify-center'>
       
     
        <ul className='mt-5'>
            {data.map((p) => <li key={p._id}>{p?.title}</li>)}
        </ul>
    </div>
  )
}
