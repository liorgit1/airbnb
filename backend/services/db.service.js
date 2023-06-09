const MongoClient = require('mongodb').MongoClient
const url = "mongodb://127.0.0.1:27017"
const config = require('../config')
const logger = require('../services/logger.service')

module.exports = {
    getCollection
}

const dbName = 'stay_db'

var dbConn = null

async function getCollection(collectionName) {
    try {
        const db = await connect()
        const collection = await db.collection(collectionName)
        // console.log(collection)
        return collection
    } catch (err) {
        logger.error('Failed to get Mongo collection', err)
        throw err
    }
}

async function connect() {
    if (dbConn) return dbConn
    console.log(config);
    try {
        const client = await MongoClient.connect(config.dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        const db = client.db(config.dbName)
        dbConn = db
        return db
    } catch (err) {
        logger.error('Cannot Connect to DB', err)
        throw err
    }
}




