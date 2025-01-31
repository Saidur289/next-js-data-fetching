import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, {params}){
   const p = await params
   const singleData = await dbConnect(collectionNames.SCHEDULE).findOne({_id: new ObjectId(p.id)})
   console.log(p);
   return Response.json(singleData) 
}
export async function PATCH(req, {params}){
   const p = await params
   const postedData = await req.json()
   console.log(postedData);
   const filter = {_id: new ObjectId(p.id)}
   const updatedData = await dbConnect(collectionNames.SCHEDULE).updateOne(filter, {$set: {...postedData}}, {upsert: true})
   console.log(updatedData);
   return Response.json(updatedData) 
}
export async function DELETE(req, {params}){
   const p = await params
   const filter = {_id: new ObjectId(p.id)}
   const deletedData = await dbConnect(collectionNames.SCHEDULE).deleteOne(filter)
   console.log(deletedData);
   return Response.json(deletedData) 
}