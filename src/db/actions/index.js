import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient

// const MongoClient = mongodb.MongoClient

import { isEmpty } from 'lodash'
import Promise from 'bluebird'

// const ObjectID = mongodb.ObjectID
const PUT_OPTIONS = { upsert: false, returnOriginal: false }

export const insert_Promise = () => {} 
export const insert_Async = () => {} 
export const insert_Observable = () => {} 

//insertOne
export const insertOne_Promise = (document, collection) => {
    return new Promise(
        resolve => {

        }
    )
}
export const insertOne_Async = async (doc) => {}
export const insertOne_Observable = () => {}

//insertMany

export const insertMany_Promise = () => {} 
export const insertMany_Async = () => {} 
export const insertMany_Observable = () => {} 

//Additional methods for insert when set-up upsert = true

export const update = () => {} 
export const updateOne = () => {} 
export const updateMany = () => {} 
export const findAndModify = () => {}
export const findOneAndUpdate = () => {}
export const findOneAndReplace = () => {}
export const save = () => {}
export const bulkWrite = () => {}

//QUERIES
//Select All Document
export const find = (query, collection) => {
    if(query) {

    }
}
//Specify Equality Condition


//Specify Conditions Using Query Operators  https://docs.mongodb.com/manual/reference/operator/query/#query-selectors



export const find_Async = async ({collection, pointer = {}}) => {
    let connectionString = 'mongodb://localhost:27017'
    let database = null
    await MongoClient('mongodb://localhost:27017', function (err, client) {
        const col = client.db('coffe').collection('shop')
        col.find({}).toArray(function(err, items) {
            // console.log(items)
            client.close()
        }) 
    })
    
}

export async function findOne() {
    
}