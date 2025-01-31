import { MongoClient, ServerApiVersion } from 'mongodb'
export const collectionNames = {
  TEST_USER: 'test-user',
  SCHEDULE: 'schedule'
}
function dbConnect(collectionName){
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9cbr8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  })
  return client.db(process.env.DB_NAME).collection(collectionName)
}
export default dbConnect