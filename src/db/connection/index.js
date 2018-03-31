import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient
import Promise from 'bluebird'
import { Observable } from 'rxjs'

const CONNECTION_TIMEOUT = 5*60*1000

//high order function 
//step 1 : return DB
//step 2 : return collection



// export const getDBConnectionString_Promise = (DBCfg) => {
//     if(!DBCfg) return null
//     let connectionString = 'mongodb://localhost:27017/taurus'

//     return new Promise(
//         (resolve) => {
//             resolve(connectionString)
//         }
//     ) 
// }

// export const getDBConnectionString_Observable = (DBCfg) => {

//     if(!DBCfg) return null
//     let connectionString = 'mongodb://localhost:27017/taurus'

//     return Observable.create(
//         (observer) => {
//             observer.next(connectionString)
//             observer.complete()
//         }
//     )
// }

export const Async_getDBClient = async ({
        prefix='mongodb://',
        username='',
        password='',
        hosting = [ 
            {
                host: 'localhost',
                port: 27017
            }
        ],
        dbname='coffe',
        connectionType = 'collection',
        options={
            replicaSetName:'',
            ssl: true,
            connectionTimeoutMS: 10000,
            socketTimeoutMS: 5000
        }
    }) => {
    let hp = await hosting.map(srv => `${srv.host}:${srv.port}`).join(',')
    let url = prefix + (username && password ? `${username}:${password}@`: '') + hp

    await MongoClient.connect(url, (err, client) => {
        if(err) {
            console.log(err)
            return null
        }
        return client.db(dbname)
    })
    
}




export const getDB = async (mongoClient, dbName) => {
    return await mongoClient.db(dbName)
}

export const getCollection = async (db, collectionName) => {
    return await db.collection(collectionName)
}

export const DBActionPipe = (...fns) => fns.reduceRight((prevFunc, currentFunc) => currentFunc(prevFunc))

export const DBAction = ({prefix='mongodb://', host='localhost', port=27017}) => {
    return (host) => {
        return (db) => {
            return (collection) => {
                return col
            }
        }
    }
}

/*
    DBCfg => connectrionString => client => 

*/