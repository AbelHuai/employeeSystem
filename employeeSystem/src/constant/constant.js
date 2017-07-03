/**
 * Created by kimOtto on 2017/4/7.
 */

import {Platform} from 'react-native'

export const AppName = '知药100'

export const ANDROID_PLATFORM = 'android';
export const IOS_PLATFORM = 'ios';

export const PAGE_SIZE = 10

export const TEL_SERVICE = {
    label: '0731-89939721',
    tel: 'tel:073189939721'
}

/**
 * 页面加载状态
 * @type {{LOADING: number, SUCCESS: number, EMPTY: number, ERROR: number}}
 */
export const LOADING_STATE = {
    LOADING: 0,
    SUCCESS: 1,
    EMPTY: 2,
    ERROR: 3,
}

export const TABS = ['首页', '分类', '购物车', '我的'];
/**
 * 微信appId
 * @type {string}
 */
export const WX_APP_ID = 'wx00e18962c81db7f2'

/**
 * 微信登录应用授权作用域
 * @type {string}
 */
export const WX_Auth_Scope = 'snsapi_userinfo'

export const KEY = {
    token: 'token', //用户token
    isFirstTimeIn: 'isFirstTimeIn', //是否第一次进入应用，用于判断是否需要显示引导页
    userInfo: 'userInfo', //用户信息（登录信息）
    account: 'account', //用户账户
    searchHistory: 'searchHistory', //搜索历史记录
    redDot: 'redDot', //首页tab红点状态
}

/**
 * 是否android平台
 * @type {boolean}
 */
export const isAndroidPlatform = (Platform.OS === ANDROID_PLATFORM)

/**
 * 对话框返回结果
 * @type {{OK: string, CANCEL: string, IGNORE: string}}
 */
export const DIALOG_RESULT = {
    OK: 'OK',
    CANCEL: 'CANCEL',
    IGNORE: 'IGNORE',
    REQUEST_CLOSE: 'REQUEST_CLOSE',
}
/**
 * 搜索的类
 * @type {{medicine: string, department: string, disease: string}}
 */
export const SEARCH_TYPE = {
    medicine: 'medicine', //药品
    department: 'department', //科室
    disease: 'disease',//疾病
}

/**
 * 选取照片
 * @type {{CAMERA: string, ALBUM: string, CANCEL: string}}
 */
export const PICK_IMG_TYPE = {
    CAMERA: 'camera',
    ALBUM: 'album',
    CANCEL: 'cancel',
}

/**
 * 通知类型
 */
export const NOTICE_TYPE = {
    SYSTEM: 'SYSTEM',
    NEW_DRUG: 'NEW_DRUG',
    MANAGE: 'MANAGE',
}

/**
 * 药品搜索结果排序类型
 * @type {{DEFAULT: string, ASC: string, DESC: string}}
 */
export const SORT_TYPE = {
    DEFAULT: 'DEFAULT',
    ASC: 'ASC',
    DESC: 'DESC'
}
/**
 * 问答类型
 */
export const CONSULTATION_TYPE = {
    REQUEST: 'REQUEST',//我提问
    RESPONSE: 'RESPONSE',//问我的
}
/**
 * 我的服务类型
 */
export const SERVICERECORD_TYPE = {
    COMMENT: 'COMMENT',//我的点评
    REPLY: 'RESPONSE',//提问的回复
}

export const GENDER = {
    MALE: 'MALE',
    FEMALE: 'FEMALE'
}

/**
 * 药师等级
 * DRUG_PRESON("药士")PHARMACIST("药师")MANAGE_PHARMACIST("主管药师")DIRECTOR_PHARMACIST("主任药师")LICENSED_PHARMACIST("执业药师")
 */
export const pharmacistLevel = {
    DRUG_PRESON: {label: '药士', value: 'DRUG_PRESON'},
    PHARMACIST: {label: '药师', value: 'PHARMACIST'},
    MANAGE_PHARMACIST: {label: '主管药师', value: 'MANAGE_PHARMACIST'},
    DIRECTOR_PHARMACIST: {label: '主任药师', value: 'DIRECTOR_PHARMACIST'},
    LICENSED_PHARMACIST: {label: '执业药师', value: 'LICENSED_PHARMACIST'},
}

/**
 *  徽章等级信息
 */
export const MedalInfo = {
    CERTIFIED_PHARMACIST: {key: 'CERTIFIED_PHARMACIST', value: '认证药师'},
    ACTIVE_PHARMACIST: {key: 'ACTIVE_PHARMACIST', value: '活跃药师'},
    MASTER_PHARMACIST: {key: 'MASTER_PHARMACIST', value: '达人药师'},
    GOLDEN_PHARMACIST: {key: 'GOLDEN_PHARMACIST', value: '黄金药师'},
    DIAMOND_PHARMACIST: {key: 'DIAMOND_PHARMACIST', value: '钻石药师'},
    CROWN_PHARMACIST: {key: 'CROWN_PHARMACIST', value: '皇冠药师'}
}

/**
 * 热门点评类型
 */
export const HOTCOMMENTFRAGMENT_TYPE = {
    COMPREHENSIVE: 'COMPREHENSIVE',//综合
    EVALUATE: 'EVALUATE',//评价
    DAYS: 'DAYS',//天数
}
/**
 * 增加、取消收藏关注类型
 */
export const COLLECTION_TYPE = {
    DRUG: 'DRUG',//药品
    PHARMACIST: 'PHARMACIST',//药师
    ARTICLE: 'ARTICLE',//文章
    CATEGORY: 'CATEGORY'//品类
}

/**
 * 首页参数
 */
export const IndexParams = {
    requestNum: 1, //提问数
    responseNum: 3, //回答数
    expSize: 2, //用药经验数
    guideSize: 2 //用药指南数
}

export const Session_Error = {
    TOKEN_Error: "52001001", //token 超时
    TOKEN_Empty: "52001000", //token 为空
}

export const ArticleType = {
    WARN: 'WARN', //安全警告信息
    EXPERIENCE: 'EXPERIENCE',//用药经验
    GUIDE: 'GUIDE', //用药指南
}

export const MSG_NO_PRIVILEGE = '抱歉，您的药师认证正在审核，暂无权限！'
export const TOKEN_UN_AUTHORIZED = 'unauthorized' //未登录的默认token，用于与h5交互

/**
 * 消息推送返回报文type类型
 */
export const JPushMsgType = {
    TYPE_NEW_CONSULT: 'new_consult', //当药师收到用户的离线咨询时 | 弹框提示，当用户点击'回复'时跳转消息页面-问答列表 消息tab显示小红点 通知
    TYPE_NEW_FANS: 'new_fans', //当药师有新增粉丝 | 当app打开时，吐司提示 个人中心tab显示红点 消息
    TYPE_GET_INTERGRAL: 'get_integral', //当药师获得积分 | 当app打开时，吐司提示 个人中心tab显示红点 消息
    TYPE_UPGRAD_LEVEL: 'upgrade_level',//当药师level获得提升 | 当app打开时，弹框提示 个人中心tab显示红点 提示语由消息报文给出 消息
    TYPE_GET_BADGE: 'get_badge', //当药师获得新徽章 | 当app打开时，弹框提示，当用户点击'查看更多特权'，跳转到'我的成就'页面 个人中心tab显示红点 通知
    TYPE_GET_VIOLATION: 'get_violation',//当药师有违规 | 当app打开时，吐司提示 消息tab显示小红点 消息
    TYPE_AUTHORIZATION_SUCCESS: 'authorization_success',//权限变更-认证通过 | 更改app用户权限，当app打开时，吐司提示 消息tab显示小红点 消息
    TYPE_AUTHORIZATION_FAIL: 'authorization_fail', //权限变更-认证失败 | 更改app用户权限，当app打开时，吐司提示 消息tab显示小红点 消息
    TYPE_AUTHORIZATION_REVOKE: 'authorization_revoke',// 权限变更-注销| 更改app用户权限，当app打开时，吐司提示  消息tab显示小红点 消息
    TYPE_NEW_REPLY: 'new_reply', //当收到新回复时| 弹框提示 消息tab显示小红点 推送
    TYPE_COMMON_MESSAGE: 'common_message', //普通提示消息 当app打开时，吐司提示 消息tab显示小红点 消息
}

/**
 * 消息推送弹框
 */
export const JPush_Dialog = {
    TYPE_CONSULTATION: 'new_consult', //新咨询
    TYPE_REPLY: 'new_reply', //新的回复
    TYPE_LEVEL_UPGRADE: 'upgrade_level', //等级升级
    TYPE_GET_BADGE: 'get_badge',//徽章升级
}
/**
 * 分享数据类型
 */
export const SHARE_DATA_TYPE = {
    MEDICINE: 'medicine', //分享药品详情
    ARTICLE: 'article', //分享文章详情
    BADGE: 'badge',//徽章分享
    LEVEL: 'level', //等级分享
    APP: 'app', //分享app
}
export const SHARE_TYPE = {
    TYPE_TIME_LINE: 'timeLine', //分享到朋友圈
    TYPE_SESSION: 'session', //分享到好友
}

/**
 * h5向native发送消息
 */
export const WEB_MSG_TYPE = {
    TYPE_LOGIN: 'login', //登录
    TYPE_TOKE: 'token_expired', //token失效
    TYPE_COPY: 'copyToClipBoard', //复制内容到剪切板
    TYPE_CONSULT: 'pharmacistConsult', //发起咨询
    TYPE_SHARE_APP: 'shareApp', //分享app
    TYPE_MEDICINE_INDICATION: 'medicineIdication', //药品适应症，在药品h5页面加载完成后返回
}

export const TOKEN_EXPIRE = {
    TIP_TOAST: 'token已过期，请重新登录',
}