//const { MongoClient } =require("mongodb")
import { MongoClient } from 'mongodb'

let myDatabase;
export const connectToDatabase =async()=>{
    try{
        const client = new MongoClient('mongodb+srv://czhao322:zPJR1AbYWBIRIlYj@cluster0.sgszyum.mongodb.net/')
        await client.connect()
        myDatabase = client.db('sfbu')
        //console.log(myDatabase.collection('jobs'))
        console.log('connect to mongodb')
    }catch(error){
        console.error('failed to connect to mongodb',error)
    }
}

const getDatabaseClient=()=>{
    return myDatabase
}

export function getDatabaseClient(){
    return myDatabase
}