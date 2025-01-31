'use server'
import dbConnect, { collectionNames } from "@/lib/dbConnect"

export const  registerUser  = async(payload) => {
 try{
    const result = await dbConnect(collectionNames.TEST_USER).insertOne(payload)
    return result
 }
 catch(error){
    console.log(error);
 }
}