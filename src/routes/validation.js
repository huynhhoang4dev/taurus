import { STATUS_CODE } from '../constants/http-code'

export const isReqValid = async reqInfo => {
    const {
        body = {},
        method,
        path,
    } = reqInfo

    let code = 0
    switch(path) {
        case '/login': {
            const { userName, passWord } = body
            if(!userName || !passWord) code = STATUS_CODE.BAD_REQUEST
        }
        case '/register': {
            break
        }
        default:
            break
    }
    return code
}