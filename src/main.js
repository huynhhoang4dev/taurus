import cluster from 'cluster'
import os from 'os'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import BodyParser from 'body-parser'
import Promise from 'bluebird'

import { Async_getDBClient } from './db/connection'

Async_getDBClient({
    
})


// import {Ganache} from 'ganache-core'
// const server = Ganache.server()

import router from './routes'
import {sendMail} from './mail'

import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient


if(cluster.isMaster) {
    const numWorkers = os.cpus().length
    console.log(`Master cluster setting up ${numWorkers} workers...!`)
    for(let i = 0; i < numWorkers; i++) {
        cluster.fork()
    }

    cluster.on('online', worker => {
        console.log(`Worker ${worker.process.pid} is online !`)
    })

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`)
        console.log('Starting new worker !')
        cluster.fork()
    })
} else {
    const app = express()

    app.use(cors())
    app.use(compression({filter: shouldCompress})) //compress response
    // app.use(BodyParser.urlencoded({extended: false}))
    app.use(BodyParser.json())


    // app.use(routing)
    app.use('/',router)
    app.listen(4000, (err) => {
        console.log('Server was established on PORT: 4000')
        if(err) {
            console.log(`App got Errors: ${err}`)
        }
        // Promise.onPossiblyUnhandledRejection((error, p) => {
        //     console.log(`Error: ${error}`)
        //     console.log(`Promise: ${p}`)
        // })
        // process.on('unhandledRejection', (reason, p) => {
        //     console.log(`Possibly Unhandled Rejection at: Promise ${p} reason: ${reason}`)
        // })
    })

}

const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header~
      return false
    }
  
    // fallback to standard filter function
    return compression.filter(req, res)
}
