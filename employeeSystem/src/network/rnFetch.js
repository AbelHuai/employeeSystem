/**
 * Created by otto on 2017/4/18.
 */

const timeout = 10000 //超时时间

/**
 * 发送get请求
 * @param url
 * @returns {Promise.<U>|Promise.<TResult>}
 */
export function get(url) {
    return request(url)
}

/**
 *发送post请求
 * @param url
 * @param body
 * @param headers
 * @returns {Promise.<U>|Promise.<TResult>}
 */
export function post(url, body, headers) {
    return request(url, body, headers, 'POST',)
}

/**
 * 发送网络请求
 * @param url
 * @param method
 * @param data
 * @param headers
 * @returns {Promise.<U>|Promise.<TResult>}
 */
const request = (url, data, headers = {}, method = 'GET') => {
    let fetchOption = {
        method: method,
        headers: headers
    }
    if ('POST' === method && data) {
        fetchOption.body = data
    }
    if (__DEV__) {
        console.log("fetch data from url:");
        console.log(url);
        console.log("method");
        console.log(method);
        console.log("headers:");
        console.log(JSON.stringify(headers));
        console.log("data:");
        console.log(JSON.stringify(data));
    }
    return timeoutFetch(fetch(url, fetchOption), timeout)
}

/**
 * 执行网络操作并设置超时
 * @param promise
 * @param timeout
 * @returns {Promise}
 */
const timeoutFetch = (promise, timeout) => {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error('fetch timeout'))
        }, timeout)
        promise.then((res) => {
            clearTimeout(timer)
            resolve(res)
        }, (error) => {
            clearTimeout(timer)
            reject(error)
        }).catch((e) => {
            reject(e)
        })
    })
}