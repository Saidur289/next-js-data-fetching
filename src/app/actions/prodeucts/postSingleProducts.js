'use server'

import dbConnect from "@/lib/dbConnect"
import { revalidatePath } from "next/cache"

export const postSingleProducts = async (postedData) => {
    try{
        const result = await dbConnect('schedule').insertOne(postedData)
        revalidatePath('/products')
        return result
    }
    catch(error){
        console.log(error)
        return null
    }
}