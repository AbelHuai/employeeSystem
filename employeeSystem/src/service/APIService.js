/**
 * 接口服务
 * Created by otto on 2017/5/25.
 */
import BaseService from './baseService'
import * as RNFetch from '../network/rnFetch'
import api from '../config/api'
import AppStore from '../store/appStore'
import * as Constants from '../constant/constant'

import PageRoute from '../page/pageRouter'

class APIService extends BaseService {

    /**
     * 发送get请求
     * @param url
     */
    get = (url) => {
        const getPromise = RNFetch.get(url)
    }

    /**
     * 发送post请求
     * @param url
     * @param body
     * @param headers
     */
    post = (url, body, headers = {}) => {

        /**
         * 添加header属性
         */
        if (!headers["Content-type"]) {
            headers["Content-type"] = 'application/json;charset=utf-8';
        }
        if (!headers["Accept"]) {
            headers["Accept"] = 'application/json';
        }

        //在发送post请求之前，往请求体`body`中注入用户token
        if (body === undefined || body === null) {
            body = {}
        }

        const token = {_openx_head: {"auth_token": AppStore.getUserToken}}
        // 注册用于测试
        //const token = {_openx_head: {"auth_token": "eyJwaGFybWFjaXN0SWQiOiIwMDAwMDMiLCJ0aW1lIjoxNDk1NjE0MDEzMDAxLCJ1c2VySWQiOiIwMDAwMDEiLCJ1c2VyTmFtZSI6Imxpc2kifQ=="}}


        Object.assign(body, token)

        const postPromise = RNFetch.post(url, JSON.stringify(body), headers)

        return new Promise((resolve, reject) => {
            postPromise.then(res => {
                console.warn(`response:${JSON.stringify(res)}`)
                this.filter(res, resolve, reject)
            }, error => {
                console.warn(`error.message:${error.message}`)
                if (error.message === 'Network request failed') {
                    reject({
                        code: -1,
                        ok: false,
                        message: '网络错误，请检查网络！'
                    })
                } else {
                    reject(error)
                }
                console.warn(`fetch error:${error}`)
            }).catch(e => {
                console.warn(`catch error:${e}`)
                reject(e)
            })
        })
    }

    /**
     * 拦截接口响应结果
     * @param res
     * @param resolve
     * @param reject
     * @returns {*}
     */
    filter = async (res, resolve, reject) => {
        if (res.ok) {//接口请求成功
            this.filterInBusinessLevel(res, resolve, reject)
        } else { //接口请求失败，网络层级
            //track error info
            try {
                let resp = await res.json()
                console.warn(`resp:${JSON.stringify(resp)}`)
                if (resp.code === Constants.Session_Error.TOKEN_Error
                    || resp.code === Constants.Session_Error.TOKEN_Empty) {
                    PageRoute.loginPage({mustRelogin: true})
                }
                reject({
                    code: -1,
                    ok: false,
                    //status: JSON.stringify(res).status,
                    //resp: res.resp,
                    message: resp
                })
            } catch (e) {
                reject(e)
            }
        }
    }

    /**
     * json化网络响应数据
     * @param res
     * @param resolve
     * @param reject
     * @returns {*}
     */
    filterInBusinessLevel = async (res, resolve, reject) => {
        try {
            const responseJson = await res.json()
            const {code, message, data} = responseJson
            //console.warn(`fetch data [ code : ${code} | message : ${message} | data : ${data} ]`)
            console.warn(`response in json:${JSON.stringify(responseJson)}`)
            if (code <= 0) {
                reject(responseJson)
            } else { //业务层级成功
                if (code === Constants.Session_Error.TOKEN_Error) {
                    PageRoute.loginPage({mustRelogin: true})
                }
                resolve(responseJson)
            }
        } catch (e) {
            console.warn(`api error:${e}`)
            reject({message: e})
        }
    }

    /**
     * 获取图片上传所需信息
     * @param fileName
     */
    getImageUploadInfo = (fileName) => {
        return this.post(api.pharmacistService.getImageUploadInfo, {fileName: fileName})
    }

    /**
     *检测手机号码是否已注册应用账号
     * @param phone
     */
    checkAccountExist = (phone) => {
        return this.post(api.regLoginService.checkAccountExist, {phone: phone})
    }

    /**
     * 登录
     * @param phone
     * @param password
     */
    login = (phone, password) => {
        return this.post(api.regLoginService.login, {phone: phone, password: password})
    }

    /**
     * 获取短信验证码
     * @param phone
     */
    getVerifyCode = (phone) => {
        return this.post(api.regLoginService.getVerifyCode, {phone: phone})
    }

    /**
     * 验证短信验证码
     * @param phone
     * @param verifyCode
     */
    checkVerifyCode = (phone, verifyCode) => {
        return this.post(api.regLoginService.checkVerifyCode, {phone: phone, checkCode: verifyCode})
    }

    /**
     * 提交药师验证
     * @param params
     */
    submitPharmacistAuthentication = (params) => {
        return this.post(api.regLoginService.submitPharmacistAuthentication, params)
    }

    /**
     * 重置密码
     * @param phone
     * @param password
     */
    updateUserPassword = (phone, password) => {
        return this.post(api.regLoginService.updateUserPassword, {phone: phone, password: password})
    }

    /**
     * 检查当前登录用户权限是否变动
     */
    getUserAuthorIsChange = () => {
        return this.post(api.regLoginService.grayUserAuthorIsChange, {})
    }

    /**
     * 更新用户头像
     * @param avatarUrl
     */
    updateAvatar = (headImgUrl) => {
        return this.post(api.regLoginService.updateAvatar, {headImgUrl: headImgUrl})
    }

    /**
     * 分页搜索所有文章
     * @param article
     * @param pageNo
     * @param pageSize
     */
    getWhiteListArticle = ({article, pageNo, pageSize}) => {
        return this.post(api.articleService.whiteListArticle, {article: article, pageNo: pageNo, pageSize: pageSize})
    }
    /**
     * 我收藏的文章
     * @param pageNo
     * @param pageSize
     */
    getMyListArticleList = ({pageNo, pageSize}) => {
        return this.post(api.articleService.listMyArticle, {pageNo: pageNo, pageSize: pageSize})
    }

    /**
     * 获取首页文章
     * @param expSize
     * @param guideSize
     */
    getIndexArticle = (expSize, guideSize) => {
        return this.post(api.articleService.getIndexArticle, {expSize: expSize, guideSize: guideSize})
    }

    /**
     * 获取关注的药品类别列表
     */
    getMyMedicineList = (pageNo, pageSize) => {
        return this.post(api.medicineService.myMedicineList, {pageNo: pageNo, pageSize: pageSize})
    }

    /**
     * 获取药品一二级分类
     */
    getMedicineFirstSecondCategory = () => {
        return this.post(api.medicineService.medicineFirstSecondCategory)
    }

    /**
     * 获取药品三级分类列表
     * @param categoryId 二级分类id
     */
    getMedicineThirdCategory = (categoryId) => {
        return this.post(api.medicineService.medicineThirdCategory, {categoryId: categoryId})
    }

    /**
     * 搜索药品
     * @param queryModel
     * @param pageNo
     * @param pageSize
     */
    searchMedicine = (queryModel, pageNo, pageSize) => {
        return this.post(api.medicineService.searchMedicine,
            {
                drug: queryModel,
                pageNo: pageNo,
                pageSize: pageSize
            })
    }

    /**
     * 分页获取我收藏的药品列表
     * @param pageNo
     * @param pageSize
     */
    myFavMedicine = (pageNo, pageSize) => {
        return this.post(api.medicineService.myFavMedicine, {pageNo: pageNo, pageSize: pageSize})
    }

    /**
     * 获取我关注的药师列表
     * @param name 药师名称搜索，如果传空查所有关注的药师
     * @param pageNo
     * @param pageSize
     */
    getMyPharmacistList = (name, pageNo, pageSize) => {
        return this.post(api.pharmacistService.myPharmacistList, {name: name, pageNo: pageNo, pageSize: pageSize})
    }

    /**
     * 获取当前登录药师详情
     */
    getLoginPharmacistDetail = () => {
        return this.post(api.pharmacistService.loginPharmacistDetail, {})
    }
    /**
     * 获取药师详情
     * @param pharmacistId
     */
    getPharmacistDetails = (pharmacistId) => {
        return this.post(api.pharmacistService.pharmacistDetails, {pharmacistId: pharmacistId})
    }
    /**
     * 搜索药师
     * @param name
     * @param pageNo
     * @param pageSize
     */
    searchPharmacist = (name, pageNo, pageSize) => {
        let body = {name: name, pageNo: pageNo, pageSize: pageSize}
        return this.post(api.pharmacistService.searchPharmacist, body)
    }

    /**
     * 获取单位列表
     */
    getCompanyList = () => {
        return this.post(api.getCompanyList)
    }

    /**
     * 搜索科室
     * @param name
     * @param pageNo
     * @param pageSize
     */
    searchDepartment = (name, pageNo, pageSize) => {
        return this.post(api.searchService.searchDepartment, {name: name, pageNo: pageNo, pageSize: pageSize})
    }
    /**
     * 搜索疾病
     * @param name
     * @param pageNo
     * @param pageSize
     */
    searchDisease = (name, pageNo, pageSize) => {
        return this.post(api.searchService.searchDisease, {name: name, pageNo: pageNo, pageSize: pageSize})
    }
    /**
     * 搜索药品-简单信息
     * @param name
     * @param pageNo
     * @param pageSize
     */
    searchSimpleMedicine = (name, pageNo, pageSize) => {
        return this.post(api.medicineService.searchSimpleMedicine, {name: name, pageNo: pageNo, pageSize: pageSize})
    }
    /**
     * 提交意见反馈
     * @param content
     */
    submitFeedBack = (content) => {
        return this.post(api.feedBackService.submitFeedBack, {content: content})
    }
    /**
     * 获取我的意见反馈列表
     * @param pageNo
     * @param pageSize
     */
    getMyFeedBackList = (pageNo, pageSize) => {
        return this.post(api.feedBackService.getMyFeedBackList, {pageNo: pageNo, pageSize: pageSize})
    }
    /**
     * 获取我的意见反馈详情
     *  @param id
     */
    getFeedBackDetail = (feedBackId) => {
        return this.post(api.feedBackService.getFeedBackDetail, {feedBackId: feedBackId})
    }

    /**
     * 获取通知类型列表
     */
    getNoticeTypeList = () => {
        return this.post(api.noticeService.getNoticeTypes)
    }

    /**
     * 根据类型获取通知列表
     * @param noticeType
     */
    getNoticesByType = (noticeType, pageNo, pageSize) => {
        return this.post(api.noticeService.getNoticeListByType, {
            type: noticeType,
            pageNo: pageNo,
            pageSize: pageSize
        })
    }

    /**
     * 获取我的推送设置配置
     */
    getPushMessageConfig = () => {
        return this.post(api.configPushmsgService.getPushMessageConfig, {})
    }
    /**
     * 修改推送设置配置
     * @param id
     * @param replyConsultation
     * @param newDrug
     * @param newDynamic
     * @param sleepPushmsg
     */
    updatePushMessageConfig = ({id, replyConsultation, newDrug, newDynamic, sleepPushmsg}) => {

        let push = {id: id}
        if (replyConsultation) {
            Object.assign(push, {replyConsultation: replyConsultation})
        }
        if (newDrug) {
            Object.assign(push, {newDrug: newDrug})
        }
        if (newDynamic) {
            Object.assign(push, {newDrug: newDynamic})
        }
        if (sleepPushmsg) {
            Object.assign(push, {sleepPushmsg: sleepPushmsg})
        }
        let body = {pushMessage: push}
        return this.post(api.configPushmsgService.updatePushMessageConfig, body)
    }
    /**
     * 获取我的粉丝
     * @param userName
     * @param pageNo
     * @param pageSize
     */
    getMyFansList = (userName, pageNo, pageSize) => {
        return this.post(api.pharmacistService.myFansList, {userName: userName, pageNo: pageNo, pageSize: pageSize})
    }
    /**
     * 获取我的成就
     */
    getPharmacistAchievement = () => {
        return this.post(api.pharmacistService.myPharmacistAchievement, {})
    }
    /**
     * 获取积分激励配置
     */
    getExcitationConfig = () => {
        return this.post(api.pharmacistService.getExcitationConfig, {})
    }
    /**
     * 获取我的成长值明细
     * @param pageNo
     * @param pageSize
     */
    findPharmacistGrowthList = (pageNo, pageSize) => {
        return this.post(api.pharmacistService.myPharmacistGrowthList, {pageNo: pageNo, pageSize: pageSize})
    }
    /**
     * 获取问答列表
     * @param pageNo
     * @param pageSize
     */
    consultationList = (pageNo, pageSize) => {
        return this.post(api.consultationService.consultationList, {pageNo: pageNo, pageSize: pageSize})
    }
    /**
     * 获取我的提问
     * @param pageNo
     * @param pageSize
     */
    myConsultationList = (pageNo, pageSize) => {
        return this.post(api.consultationService.myConsultationList, {pageNo: pageNo, pageSize: pageSize})
    }
    /**
     * 发起咨询
     * @param consultation
     */
    createConsultation = (consultation) => {
        return this.post(api.consultationService.createConsultation, consultation)
    }
    /**
     * 获取咨询详情(用于获取问答列表&我的提问 的问答详情)
     * @param consultationId
     */
    getConsultation = (consultationId) => {
        return this.post(api.consultationService.getConsultation, {consultationId: consultationId})
    }
    /**
     * 回复用户咨询
     * @param consultationId
     * @param content
     */
    answerConsultation = (consultationId, content) => {
        return this.post(api.consultationService.answerConsultation, {consultationId: consultationId, content: content})
    }
    /**
     * 评价药师回复
     * @param answerId
     * @param star
     * @param content
     */
    evaluateConsultationAnswer = (answerId, star, content) => {
        return this.post(
            api.consultationService.evaluateConsultationAnswer,
            {answerId: answerId, star: star, content: content}
        )
    }
    /**
     * 获取首页问答数据
     * @param requestNum
     * @param responseNum
     */
    getIndexConsultationInfo = (requestNum, responseNum) => {
        return this.post(api.consultationService.getIndexConsultationInfo, {
            requestNum: requestNum,
            responseNum: responseNum
        })
    }
    /**
     * 获取我的服务列表
     * @param pageNo
     * @param pageSize
     */
    myServiceRecordList = (pageNo, pageSize) => {
        return this.post(api.serviceRecordService.myServiceRecordList, {pageNo: pageNo, pageSize: pageSize})
    }
    /**
     * 获取服务记录详情
     * @param recordId
     * @param type
     */
    getUserServiceRecord = (recordId, type) => {
        return this.post(api.serviceRecordService.getUserServiceRecord, {recordId: recordId, type: type})
    }
    /**
     * 获取点评服务记录的回复数据
     * @param recordId
     * @param pageNo
     * @param pageSize
     */
    getCommentServiceRecordRepliesList = (recordId, pageNo, pageSize) => {
        return this.post(api.serviceRecordService.getCommentServiceRecordRepliesList, {
            recordId: recordId,
            pageNo: pageNo,
            pageSize: pageSize
        })
    }
    /**
     * 获取我的签到数据
     */
    getMySign = () => {
        return this.post(api.userSignService.getMySign, {})
    }
    /**
     * 用户签到
     */
    sign = () => {
        return this.post(api.userSignService.sign, {})
    }
    /**
     * 获取昨日签到幸运星
     */
    getYesterdayLuckyStar = () => {
        return this.post(api.userSignService.getYesterdayLuckyStar, {})
    }
    /**
     * 获取热门药品点评
     * @param useFulNumSortType
     * @param lastDays
     * @param pageNo
     * @param pageSize
     */
    getHotCommentList = (useFulNumSortType, lastDays, pageNo, pageSize) => {
        return this.post(api.commentService.hotCommentList, {
            useFulNumSortType: useFulNumSortType,
            lastDays: lastDays,
            pageNo: pageNo,
            pageSize: pageSize
        })
    }
    /**
     * 设置药品点评有用
     * @param commentId
     */
    markCommentUseful = (commentId) => {
        return this.post(api.commentService.markCommentUseful, {commentId: commentId})
    }
    /**
     * 取消设置药品点评有用
     * @param commentId
     */
    cancelCommentUseful = (commentId) => {
        return this.post(api.commentService.cancelCommentUseful, {commentId: commentId})
    }


    /**
     * 增加收藏关注
     * @param contentId
     * @param fansType
     */
    addFans = (contentId, fansType) => {
        return this.post(api.fansService.addFans, {contentId: contentId, fansType: fansType})
    }
    /**
     * 取消收藏关注
     * @param contentId
     * @param fansType
     */
    cancelFans = (contentId, fansType) => {
        return this.post(api.fansService.cancelFans, {contentId: contentId, fansType: fansType})
    }

    /**
     * 判断当前用户是否已关注某对象
     * @param contentId 对象id（药品，药师，文章，品类的id）
     */
    judgeFans = (contentId) => {
        return this.post(api.fansService.judgeFans, {contentId: contentId})
    }

    /**
     * 获取搜索关键字建议
     * @param keyword
     * @param maxCount
     */
    getSearchKeyAssociation = (keyword, maxCount) => {
        return this.post(api.searchAssistantService.getSuggest, {keyword: keyword, maxCount: maxCount})
    }

    /**
     * 搜索关键字结果纠错
     * @param keyword
     * @param maxCount
     */
    getSearchKeySuggestion = (keyword, maxCount) => {
        return this.post(api.searchAssistantService.searchKeyCorrect, {keyword: keyword, maxCount: maxCount})
    }

    /**
     * 获取药师二维码
     * @param pharmacistId
     */
    getBarCodeImgUrl = (pharmacistId) => {
        return api.barCodeImgUrl.replace('${pharmacistId}', pharmacistId)
    }

}

export default new APIService()
