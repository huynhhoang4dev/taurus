export const getRequestInfo = req => {
    const {
        params,
        queries,
        body,
        path,
        method,
        originalUrl,
        headers: {
            chanel,
            token
        } = {},
        accInfo = {}
    } = req
    return { params, queries, body, chanel, token, path, originalUrl, method, accInfo }
}