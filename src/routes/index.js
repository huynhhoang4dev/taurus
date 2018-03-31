import express from 'express'
import jwt from 'jsonwebtoken'
import AJV from 'ajv'
const router = express.Router()
import Promise from 'bluebird'
import { buildResponse } from '../helpers/response'

const EXPIRED_TIME = 30*24*3600 //30 days
const TAURUS_OPTION_SECRET_KEY = 'Taurus-Option-SecretKey'


// import * as randomstring from 'randomstring'
// import {
    
// } from './process'

// import { sendMail } from '../mail'

// export const routing = async (app) => {

    
    
// };

// router.get('/', (req, res) => {
//     res.send('Hello')
// })

// const coinAct = async (req, res, next) => {

// }
const ajv = new AJV()
const accountSchema = {
    "properties": {
        "mail": { "format": "email" },
        "password": { "type": "string" }
    }
}
const accountValidate = ajv.compile(accountSchema)


router.post('/sign-in', _verifyAccount, _signIn)

router.post('/sign-up', _verifyAccount, _signUp, _confirmEmail)

router.post('/forgot-password',  (req, res) => {
    res.send('Forgot-PASSWORD')}
)

router.post('/auth',_ensureToken,  (req, res) => {
    res.send('AUTH')}
)
// router.post('/coin', );

module.exports = router

async function _verifyAccount (req, res, next) {
    let {
        email, password
    } = req.body

    let valid = await accountValidate({mail, password})
    if(valid) {
        next() 
    } else {
        let result = buildResponse({status: false, message: 'Type is not valid !'})
        res.json(result)
    }
}

async function _signIn (req, res) {
    let {
        mail, password
    } = req.body

    jwt.sign({mail}, TAURUS_OPTION_SECRET_KEY, { expiresIn: '30 days' }, (err, token) => {
        if(err) console.log(err)
        let result = buildResponse({status: true, data: {token}})
        console.log(result)
        res.json(result)
    })
}

async function _signUp (req, res, next) {
    const {
        email,
        password
    } = req

    await jwt.sign(
        {email}, 
        'Taurus-Option-SecretKey', 
        {
            expiresIn: EXPIRED_TIME
        },
        (err, token) => {
            res.json({token})
        }
    )
    next()
}

async function _confirmEmail (req, res) {
    res.json()
}

async function _forgotPassword (req, res, next) {

}

//Formated Token
//Taurus-Option-Token: <access-token>

async function _ensureToken (req, res, next) {
    const _taurusTradingToken = req.headers['Taurus-Option-Token']
    if(typeof _taurusTradingToken !== undefined) {
        await jwt.verify(_taurusTradingToken, TAURUS_OPTION_SECRET_KEY, (err, payload) => {
            if(err) {
                let result = buildResponse({status: false})
                console.log(result)
                res.json(result)
            } 
            next()
        })
    } else {
        let result = buildResponse({status: false})
        console.log(result)
        res.json(result)
    }
}
