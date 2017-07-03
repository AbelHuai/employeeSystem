/**
 * Created by otto on 2017/5/8.
 */

function getUrl(urlFragment) {
    return apiDomain + urlFragment;
}

/**
 * 获取用户二维码图片地址
 * @returns {string}
 */
function getBarCodeImgUrl() {
    return barCodeImgDomain
}

/**
 * 获取药品详情地址
 */
function getMedicineDetailsUrl() {
    return medicineDetailsDomain
}

/**
 * 获取文章详情地址
 * @returns {string}
 */
function getArticleDetailsUrl() {
    return articleDetailsDomain
}

const apiDomainConfig = {
    /** 开发*/
    DEVELOP: 'http://192.168.7.65:8090/openx/',
    /** 测试*/
    TEST: 'https://zhiyao-apps-te.yifengx.com/openx/',
    /** 预生产*/
    PRE_PRODUCTION: '',
    /** 生产*/
    PRODUCTION: 'https://zhiyao-apps.yifengx.com/openx/',

    BarCodeImgURL_DEVELOP: 'https://yf-test-oss.yifengx.com/webtest/zhiyao/pharmacist/${pharmacistId}.png',
    BarCodeImgURL_TEST: 'https://yf-test-oss.yifengx.com/webtest/zhiyao/pharmacist/${pharmacistId}.png',
    BarCodeImgURL_PRE_PRODUCTION: '',
    BarCodeImgURL_PRODUCTION: 'https://img.yifengx.com/zt/zhiyao/pharmacist/${pharmacistId}.png',

    MEDICINE_DETAILS_DEVELOP: 'https://yf-test-oss.yifengx.com/webtest/zhiyao/h5/view/details/drugDetails.html?drugId=',
    MEDICINE_DETAILS_TEST: 'https://yf-test-oss.yifengx.com/test-env/zhiyao/h5/view/details/drugDetails.html?drugId=',
    MEDICINE_DETAILS_PRODUCTION: 'https://open.yifengx.com/zhiyao/h5/view/details/drugDetails.html?drugId=',

    ARTICLE_DETAILS_DEVELOP: 'https://yf-test-oss.yifengx.com/webtest/zhiyao/h5/view/details/drugExpDetails.html?articleId=',
    ARTICLE_DETAILS_TEST: 'https://yf-test-oss.yifengx.com/test-env/zhiyao/h5/view/details/drugExpDetails.html?articleId=',
    ARTICLE_DETAILS_PRODUCTION: 'https://open.yifengx.com/zhiyao/h5/view/details/drugExpDetails.html?articleId=',
}

// const apiDomain = apiDomainConfig.DEVELOP;
// const barCodeImgDomain = apiDomainConfig.BarCodeImgURL_DEVELOP
// const medicineDetailsDomain = apiDomainConfig.MEDICINE_DETAILS_DEVELOP
// const articleDetailsDomain = apiDomainConfig.ARTICLE_DETAILS_DEVELOP

// const apiDomain = apiDomainConfig.TEST;
// const barCodeImgDomain = apiDomainConfig.BarCodeImgURL_TEST
// const medicineDetailsDomain = apiDomainConfig.MEDICINE_DETAILS_TEST
// const articleDetailsDomain = apiDomainConfig.ARTICLE_DETAILS_TEST

const apiDomain = apiDomainConfig.PRODUCTION;
const barCodeImgDomain = apiDomainConfig.BarCodeImgURL_PRODUCTION
const medicineDetailsDomain = apiDomainConfig.MEDICINE_DETAILS_PRODUCTION
const articleDetailsDomain = apiDomainConfig.ARTICLE_DETAILS_PRODUCTION

/**
 * 登录注册
 */
const regLoginService = getUrl('user/userService/')

/**
 * 应用相关
 */
const appService = getUrl('base/appConfigService/')


export default  {
    appUrl: 'https://zhiyao.yifengx.com/index.html',
    h5Page: {
        medicineDetails: getMedicineDetailsUrl(),
        medicineAddCommentFragment: 'addDoctorCommen.html',
        articleDetails: getArticleDetailsUrl(),
        articleDetailsPrefix: getArticleDetailsUrl(),
        articleThumbnail: 'https://img.yifengx.com/zhiyao/article_list_default.png', //文章列表缩略图
    },
    shareImageUrl: {
        badgeCrown: 'https://img.yifengx.com/zhiyao/crown_share.jpg',
        badgeDiamonds: 'https://img.yifengx.com/zhiyao/diamonds_share.jpg',
        badgeGold: 'https://img.yifengx.com/zhiyao/gold_share.jpg',
        levelUpgrade: 'https://img.yifengx.com/zhiyao/upgrade_share.jpg',
        thumbnail: 'https://img.yifengx.com/zhiyao/default_share.png',
        appThumbnail: 'https://img.yifengx.com/zhiyao/app_logo.png',
    },
    /**
     * 图片上传
     */
    imageUpload: 'https://img.yifengx.com',
    barCodeImgUrl: getBarCodeImgUrl(),
    appService: {
        /**
         * 获取APP版本号
         */
        getAppVersion: appService + 'whiteGetAppVersion',
    },
    regLoginService: {
        /**
         * 登录
         */
        login: regLoginService + 'whiteUserLogin',
    },
}