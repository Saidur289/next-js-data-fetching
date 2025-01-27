export  const getSinglePost = async(id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

export default async function SinglePost({params}) {
    const id = (await params).id
    const post = await getSinglePost(id)
    if(post){
        return (
            <div className="mt-5 p-5">
                <h1>Your Post Number : {id}</h1>
                <p className="my-3 text-green-700 font-bold">{post.title}</p>
                <p className="font-semibold">{post.body}</p>
            </div>
          )
    }
    else{
        return <p>Not Available Post</p>
    }
 
}
