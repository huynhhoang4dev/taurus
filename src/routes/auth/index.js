import express from 'express'
const authRouter = express.Router()

authRouter.use('/buy')
authRouter.use('/sell')

module.exports = authRouter