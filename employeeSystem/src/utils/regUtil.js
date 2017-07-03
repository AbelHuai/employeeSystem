/**
 * Created by yf-Otto on 2017/3/20.
 */

const patrn = /^1[34578]\d{9}$/
const regCheckPwd = /^[0-9A-Za-z]+$/ //验证密码 数字和字母

/**
 * 验证手机号码
 * @param phoneNum
 * @returns {boolean}
 */
export const checkPhoneNum = (phoneNum) => {
    return patrn.test(phoneNum)
}

/**
 * 过滤字符串
 * @param str 原始字符串
 * @param reg 要过滤的字符
 * @returns {string}
 */
export const filterAll = (str, reg) => {
    if (!str) {
        return ''
    }
    return str.replace(new RegExp('reg', 'gm'), '')
}

/**
 * 取掉字符串前后空格
 * @param str
 * @returns {string}
 */
export const trim = (str) => {
    if (!str) {
        return ''
    }
    return str.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, '');
}


/**
 * 验证密码是否符合规范
 * @param password
 * @returns {*}
 */
export const checkPassword = (password) => {
    if (!password) {
        return undefined
    }

    const regPwd = new RegExp(regCheckPwd)
    return regPwd.test(password)

}