/**
 * Created by otto on 2017/5/9.
 */

import {AppState} from 'react-native'
import {observable, action, reaction, computed} from 'mobx'

import UserStore from './userStore'
import * as Constants from '../constant/constant'
import PageRoute from '../page/pageRouter'
// import StorageService from '../service/storageService'

class AppStore {

    @observable
    selectedTabIndex = 0 //选中的tab
    userStore

    constructor() {
        this.init()
    }


    init = async () => {
        this.initStore()
    }

    /**
     * 初始化一些store
     */
    initStore() {
        this.userStore = new UserStore()
        this.run()
    }

    run = () => {
        reaction(() => this.userStore.token, token => {
            this.restoreRedDotState()
        })
        reaction(() => this.userStore.userId, userId => {
            console.warn(`pharmacistId:${userId}|time:${new Date().getMilliseconds()}`)
            // JPushStore.setAlias(userId)
        })
    }

    onResume() {
        this.selectedTab = Constants.TABS[0]
        this.selectedTabIndex = 0
    }

    /**
     * 更新用户登录状态
     * @returns {Promise.<void>}
     */
    async updateUserLoginState() {
        this.userStore.updateUserLoginState()
    }

    /**
     * 保存用户token
     * @param token
     */
    saveUserToken = (token) => {
        this.userStore.saveUserToken(token)
    }

    /**
     * 判断用户是否登录
     * @returns {boolean}
     */
    @computed
    get isLogin() {
        return this.userStore.isLogin
    }

    /**
     * 获取用户token
     * @returns {*}
     */
    @computed
    get getUserToken() {
        return this.userStore.getUserToken
    }


    @computed
    get getLoginUserInfo() {
        return this.userStore.loginPharmacistDetailData
    }

    /**
     * 退出登录
     */
    logout = () => {
        this.userStore.logout()
    }
}

export default new AppStore()