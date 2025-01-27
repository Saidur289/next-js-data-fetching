import Link from "next/link"
import style from './post.module.css'

export const getPosts = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const data = await res.json()
    return data
}

export default async function Posts() {
    const posts = await getPosts()

  return (
    <div>
        <h1 className='text-center text-green-500 text-2xl mb-5'>My Post Page</h1>
      <div className="grid grid-cols-3 gap-8 ">
        {
            posts.map((post, index) => <div key={index} className="border-4 shadow-xl border-green-300 p-3">
                <p className={`text-xl font-bold  text-white ${style['post-title']}`}>{post.title}</p>
                <p className="font-semibold mb-5">{post.body}</p>
                <Link  href={`/posts/${post.id}`}>
                <button className="bg-green-700 text-white px-5 py-3 rounded-2xl">Details</button>
                </Link>
            </div>)
        }

      </div>
    </div>
  )
}
