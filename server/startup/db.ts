const mongoose = require("mongoose");
const {MongoClient} = require('mongodb');

const dbName = 'just_a_like'
const uri = "mongodb://localhost/just_a_like";
let dbConnection:any = null

module.exports = {
    // getCollection,
    connect
}

/**
 * 
 * @param collectionName 
 * @returns db collection
 */
// async function getCollection(collectionName: string) {
//     try {
//         const db = await connect()
//         const collection = await db.collection(collectionName)
//         return collection
//     } catch (err) {
//         console.error('Failed to get Mongo collection', err)
//         throw err
//     }
// }
/**
 * 
 * @returns db connection
 */
async function connect() {
    //if db already connected - return db connection
    
    // if (dbConnection) return dbConnection
    // try {
    //     const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    //     const db = client.db(dbName)
    //     dbConnection = db;
    //     return db
    // } catch (err) {
    //     console.error('Cannot Connect to DB', err)
    //     throw err
    // }

    mongoose.connect(uri, {}); 
      const connection = mongoose.connection;
      connection.once("open", () => {
        console.log("MongoDB database connect");
      });
}

export {};
