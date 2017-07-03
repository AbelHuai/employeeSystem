/**
 * Created by otto on 2017/5/8.
 */

import * as ConstantKeys from '../constant/constant'

class StorageService {
    /**
     * 根据key获取本地缓存，未对该key缓存过数据则返回undefined
     * @param key
     * @returns {*}
     */
    load = async (key) => {
        //console.warn(`load data from local by key:${key}`)
        try {
            return await storage.load({key: key})
        } catch (e) {
            //console.warn(`load data from local error:${e}`)
            return undefined
        }
    }

    /**
     * 缓存数据到本地
     * @param key
     * @param value
     */
    save = async (key, value) => {
        //console.warn(`save data(${key}:${value})`)
        storage.save({key: key, data: value})
    }

    /**
     * 根据key清除本地缓存
     * @param key
     */
    remove = (key) => {
        try {
            storage.remove({key: key});
        } catch (e) {
            //
        }
    }

    /**
     * 读取是否第一次进入应用
     */
    readIsFirstTimeIn = () => {
        return this.load(ConstantKeys.KEY.isFirstTimeIn)
    }

    /**
     * 设置是否第一次进入应用
     * @param isFirstTimeIn
     */
    setupIsFirstTimeIn = (isFirstTimeIn) => {
        this.save(ConstantKeys.KEY.isFirstTimeIn, isFirstTimeIn)
    }

    /**
     * 保存用户登录凭证 token
     * @param token
     */
    saveUserToken = (token) => {
        this.save(ConstantKeys.KEY.token, token)
    }

    /**
     * 获取用户登录凭证 token
     * @returns {*}
     */
    getUserToken = () => {
        return this.load(ConstantKeys.KEY.token)
    }

    /**
     * 读取用户信息
     */
    getUserInfo = () => {
        return this.load(ConstantKeys.KEY.userInfo)
    }

    /**
     * 保存用户信息
     * @param userInfo
     */
    saveUserInfo = (userInfo) => {
        this.save(ConstantKeys.KEY.userInfo, userInfo)
    }

    /**
     * 缓存用户账户
     * @param account
     */
    cacheUserAccount = (account) => {
        this.save(ConstantKeys.KEY.account, account)
    }

    /**
     * 恢复用户账户
     */
    restoreUserAccount = () => {
        return this.load(ConstantKeys.KEY.account)
    }

    /**
     * 保存搜索历史
     * @param searchKey
     */
    saveSearchHistory = async (searchKey) => {
        let history = await this.load(ConstantKeys.KEY.searchHistory)
        console.warn(`search history:${history}`)
        if (!history) {
            history = []
        }
        //删除相同记录
        let historyLen = history.length
        let targetIndex = -1
        if (historyLen > 0) {
            for (let index = 0; index < historyLen; index++) {
                if (searchKey === history[index]
                    || searchKey == history[index]) {
                    targetIndex = index
                    break
                }
            }
        }
        if (targetIndex >= 0) {
            history.splice(targetIndex, 1)
        }
        //将记录添加头部位置
        history.splice(0, 0, searchKey)
        console.warn(`save search history ${history}`)
        this.save(ConstantKeys.KEY.searchHistory, history)
    }

    /**
     * 获取搜索关键字历史记录
     * @returns {*}
     */
    loadSearchKeyHistory = () => {
        return this.load(ConstantKeys.KEY.searchHistory)
    }

    /**
     * 清除搜索关键字
     */
    clearSearchHistory = () => {
        this.save(ConstantKeys.KEY.searchHistory, [])
    }

    /**
     * 缓存首页tab红点状态
     * @param redDotState
     */
    cacheRedDotState = (restoreKey, redDotState) => {
        this.save(ConstantKeys.KEY.redDot+restoreKey, redDotState)
    }

    /**
     * 恢复首页tab红点状态
     * @returns {*}
     */
    restoreRedDotState = (restoreKey) => {
        return this.load(ConstantKeys.KEY.redDot+restoreKey)
    }

    /**
     * 清除本地
     * @returns {Promise.<void>}
     */
    clearAllData = async () => {
        this.remove(ConstantKeys.KEY.token)
        this.remove(ConstantKeys.KEY.userInfo)
        this.remove(ConstantKeys.KEY.searchHistory)
    }
}

export default new StorageService()