/**
 * Created by kimOtto on 2017/4/7.
 */
import {observable, action, toJS} from 'mobx'
import * as Constants from '../constant/constant'

export default class BaseStore {

    @observable
    loadingState = Constants.LOADING_STATE.LOADING

    constructor() {

    }

    @action
    updateLoadingState(loadingState) {
        this.loadingState = loadingState
    }

    /**
     * 标记为静态页面
     */
    showAsStaticPage() {
        this.onSuccess()
    }

    loadData() {

    }

    onLoading() {
        this.updateLoadingState(Constants.LOADING_STATE.LOADING)
    }

    onError() {
        this.updateLoadingState(Constants.LOADING_STATE.ERROR)
    }

    onSuccess() {
        this.updateLoadingState(Constants.LOADING_STATE.SUCCESS)
    }

    onEmpty() {
        this.updateLoadingState(Constants.LOADING_STATE.EMPTY)
    }

    onRetry() {
        this.updateLoadingState(Constants.LOADING_STATE.LOADING)
    }

    /**
     * 是否加载成功
     * @returns {boolean}
     */
    isLoadingSuccess() {
        return this.getCurrentLoadingState() === Constants.LOADING_STATE.SUCCESS
    }

    /**
     * 是否正在加载
     * @returns {boolean}
     */
    isLoading() {
        return this.getCurrentLoadingState() === Constants.LOADING_STATE.LOADING
    }

    /**
     * 是否加载出错
     * @returns {boolean}
     */
    isError() {
        return this.getCurrentLoadingState() === Constants.LOADING_STATE.ERROR
    }

    /**
     * 是否加载结果为空
     * @returns {boolean}
     */
    isEmpty() {
        return this.getCurrentLoadingState() === Constants.LOADING_STATE.EMPTY
    }

    /**
     * 当前加载状态
     * @returns {*}
     */
    getCurrentLoadingState() {
        return toJS(this.loadingState)
    }
}