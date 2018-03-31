import errors from './map.json'

export const getMessage = code => {
    if(code === 0) return undefined
    let message = errors[`${code}`]
    return message ? message : `Message for ${code} is not defined !`
}