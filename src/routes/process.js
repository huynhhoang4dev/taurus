import { getRequestInfo } from '../helpers/request-info'
import jwt from 'jsonwebtoken'

export const sign_in = async (req, res) => {
    const reqInfo = getRequestInfo(req)

    let code =  await isReqValid(reqInfo)
    if(code !==0) {

    }

    jwt.verify(req.token)

}

export const sign_on = async (req, res) => {
    
}

// export const sign_up = async (req, res) => {
//     const { userName, passWord, email }
//     const token = jwt.sign({}, 'Taurus-Trading-Secret-Key')
// }

