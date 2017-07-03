/**
 * Created by otto on 2017/5/9.
 */

import React, {} from 'react'
import {ListView} from 'react-native'

import {observable, action, reaction, runInAction, computed} from 'mobx'
import BaseStore from './baseStore'

import * as RegUtil from '../utils/regUtil'
import APIService from '../service/APIService'
import * as Constants from  '../constant/constant'
import AppStore from '../store/appStore'
import StorageService from '../service/storageService'
import Toast from '@remobile/react-native-toast'
import * as Base64 from '../utils/base64'
import * as FileUploadUtil from '../network/fileUploadUtil'

export default class UserStore extends BaseStore {

    @observable
    excitationConfig = []
    jifeItemLastIndex //积分奖励规则条数

    @observable
    token //用户token
    @observable
    tokenPrivilege //用户权限
    @observable
    pharmacistId //药师id
    @observable
    userId //用户id

    pageNo = 1
    totalCount = 0

    /**
     * 登录
     */
    phone = ''
    password = ''

    @observable
    loginPharmacistDetailData = {headImg: ''}

    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    constructor() {
        super()
        this.showAsStaticPage()
        this.updateUserLoginState()
    }

    /**
     * 保存用户token
     * @param token
     */
    saveUserToken = async (token) => {
        await StorageService.saveUserToken(token)
        runInAction(() => {
            this.parseToken(token)
        })
    }

    /**
     * 更新用户登录状态
     * @returns {Promise.<void>}
     */
    @action
    async updateUserLoginState() {
        const tokenTemp = await StorageService.getUserToken()
        this.parseToken(tokenTemp)
    }

    /**
     * 判断用户是否登录
     * @returns {boolean}
     */
    @computed
    get isLogin() {
        return !(this.token === null || this.token === undefined)
    }



    /**
     * 获取用户token
     * @returns {*}
     */
    @computed
    get getUserToken() {
        return this.token
    }


    /**
     * 登录
     */
    login = async () => {
        console.warn(`phone:${this.phone} password:${this.phone}`)
        if (this.phone.length <= 0) {
            return {message: '请输入手机号码'}
        } else {
            if (!RegUtil.checkPhoneNum(this.phone) || this.phone.length < 11) {
                return {message: '请输入正确手机号码'}
            }
        }
        if (this.password.length < 6) {
            return {message: '密码错误'}
        }

        try {
            const loginResult = await APIService.login(this.phone, this.password)
            this.saveUserToken(loginResult.data)
            return loginResult
        } catch (e) {
            return e
        }

    }

    /**
     * 重新登录
     * @returns {Promise.<void>}
     */
    relogin = async () => {
        try {
            let account = await StorageService.restoreUserAccount()
            if (account) {
                let accountEntity = JSON.parse(account)
                this.phone = accountEntity.phone
                this.password = accountEntity.password
                this.login()
            }
        } catch (e) {

        }

    }

    /**
     * 缓存用户账户
     */
    cacheUserAccount = () => {
        let account = {phone: this.phone, password: this.password}
        StorageService.cacheUserAccount(JSON.stringify(account))
    }

    /**
     * 更新用户权限
     */
    updatePrivilege = async () => {
        try {
            const privilegeResult = await APIService.getUserAuthorIsChange()
            //code 1表示权限无变动，2：恭喜，你的药师认证已通过审核，3：您的药师资格已注销
            if (privilegeResult.code > 1) {
                //Toast.show(privilegeResult.message)
                this.saveUserToken(privilegeResult.data)
            }
        } catch (e) {
            //do nothing
        }
    }

    @action
    parseToken = (token) => {
        if (!token) {
            return
        }
        try {
            this.token = token
            const tokenJson = Base64.base64decode(token)
            console.warn(`tokenJson:${tokenJson}`)
            const tokenEntity = JSON.parse(tokenJson)
            console.warn(`privilege:${tokenEntity.hasOwnProperty('pharmacistId')}`)
            if (tokenEntity.hasOwnProperty('pharmacistId')) {
                this.pharmacistId = tokenEntity.pharmacistId
                this.tokenPrivilege = true
            } else {
                this.tokenPrivilege = false
            }

            this.userId = tokenEntity.userId
        } catch (e) {
            console.warn(`parse token error:${e}`)
        }
    }

    @action
    updateExcitationConfig = (excitationConfig) => {
        this.excitationConfig = excitationConfig
        this.jifeItemLastIndex = this.excitationConfig.length - 1
    }

    /**
     * 更新用户头像
     * @param url
     */
    @action
    updateUserAvatar = (url) => {
        console.warn(`update user avatar url:${url}`)
        if (this.loginPharmacistDetailData) {
            this.loginPharmacistDetailData.headImg = url
        }
        console.warn(`user info${this.loginPharmacistDetailData}`)
    }

    /**
     * 刷新药师成长值页面数据
     */
    async refreshGrowthValue() {
        try {
            const excitationConfig = await APIService.getExcitationConfig()
            this.updateExcitationConfig(excitationConfig)
        } catch (e) {

        }
    }

    /**
     * 更新用户头像
     * @param localAvatarUrl
     * @returns {Promise.<*>}
     */
    updateAvatar = async (localAvatarUrl) => {
        try {
            const ossForm = await FileUploadUtil.uploadImage(localAvatarUrl)
            const imageUrl = ossForm.host + '/' + ossForm.key
            const uploadResult = await APIService.updateAvatar(imageUrl)
            console.warn(`设置头像：${JSON.stringify(uploadResult)}`)
            if (uploadResult && uploadResult.code == 1) {
                this.updateUserAvatar(/*uploadResult.url*/imageUrl)
                return {code: 1, message: '更新头像成功', url: imageUrl}
            } else {
                return {code: -1, message: '更新头像失败'}
            }
        } catch (e) {
            return {code: -1, message: '更新头像失败'}
        }
    }

    /**
     * 退出登录，清理缓存数据
     */
    @action
    logout = () => {
        this.token = undefined
        this.pharmacistId = undefined
        this.userId = undefined
        this.tokenPrivilege = false
        this.phone = ''
        this.password = ''
        StorageService.clearAllData()
    }

    @computed
    get getDataSource() {
        return this.ds.cloneWithRows(this.excitationConfig.slice())
    }


}