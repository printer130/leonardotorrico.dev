// import { MongoClient, ObjectID } from '../../node_modules/mongodb/index.js'
import { configg } from '../config/index.js'
import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
// const { MongoClient, ObjectID } = require('mongodb')
// const { config } = require('../config')

const USERNAME = configg.dbUsername
const PASSWORD = configg.dbPassword
const DBNAME = configg.dbName

const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0-yfxun.mongodb.net/${DBNAME}?retryWrites=true&w=majority`

const client = new MongoClient()
client.connectWithUri(URI)
// client.connectWithUri('mongodb+srv://leonardo:a3b8pn0o0pd0l4pa@cluster0-yfxun.mongodb.net/leonardo?retryWrites=true&w=majority')

const db = client.database('leonardo')
const contact = db.collection('contact')

export const insertId = async (data) => {
  // console.log(JSON.parse(data))
  await contact.insertOne(JSON.parse(data))
}
