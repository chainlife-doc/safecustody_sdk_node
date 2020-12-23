Request = {}
const axios = require("axios");
/**
 * 请求路由
 */
Request.request = function request(url, param, user) {

    content = Request.reqParam(param, user)

    return Request.post(url, content)
}


/**
 * 请求参数解析
 * @param param
 * @param user
 * @returns {{auth: {token: *, timestamp: number}}}
 */
Request.reqParam = function reqParam(param, user) {
    arr = {
        "appid": user.appid,
        "cryptype": 0,
    }
    data = {
        "auth": {
            "token": user.getToken(),
            "timestamp": user.getTime(),
            "api_key": user.getApiKey(),
        },
    }
    if (param !== undefined && param != null && param !== "") {
        data = Object.assign(data, param)
    }
    arr["data"] = data
    user.unsetTime()
    return arr
}


/**
 * post 提交
 */
Request.post = async function post(url, content) {
    const promise = new Promise((resolve) => {
        axios({
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': content.length
            },
            url: url,
            data: JSON.stringify(content),
        }).then((res) => {
            resolve(res.data)
        })
    })

    return await promise
}

module.exports = Request