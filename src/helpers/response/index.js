
export function buildResponse({status = false, message = {}, data = {}}) {
    return {
        status,
        message,
        data
    }
}