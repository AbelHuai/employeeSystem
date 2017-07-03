/**
 * Created by kimOtto on 2017/4/7.
 */

import React, {PureComponent, PropTypes} from 'react'
import {StyleSheet, View, Text, InteractionManager} from 'react-native'
import {runInAction} from 'mobx'
import {Actions} from 'react-native-router-flux'

import DefaultStore from '../store/baseStore'
import ExceptionLayout from '../component/common/exceptionLayout'

import PageRouter from './pageRouter'
import TitleBar from '../component/common/titleBar'

export default class BasePage extends PureComponent {

    static propTypes = {
        pageStore: PropTypes.object
    }

    /**页面数据管理器**/
    pageStore
    /**返回到上一级页面后是否刷新**/
    refreshAfterBack

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        //console.warn(`page props : ${JSON.stringify(this.props)}`)
        if (this.props.pageStore) {
            this.pageStore = this.props.pageStore
        } else {
            this.initPageStore()
        }
    }

    componentDidMount() {
        this.loadDataAfterPageAnimation()
    }

    componentWillUnmount() {
        this.refreshAfterBackPressed()
    }

    shouldComponentUpdate(nextProps, nextState) {
        const refreshOnResume = nextProps && nextProps.refreshOnResume
        if (refreshOnResume) {
            this.onResume(nextProps.onResumeData)
        }
        if(refreshOnResume === undefined) {
            return false
        }
        return false
        // return refreshOnResume
        //return super.shouldComponentUpdate(nextProps, nextState)
    }

    initPageStore() {
        //should override by subClass
        this.pageStore = new DefaultStore()
    }

    loadDataAfterPageAnimation() {
        InteractionManager.runAfterInteractions(() => {
            this.loadData()
        })
    }

    loadData() {
        this.pageStore.loadData()
    }

    onRetry() {
        this.pageStore.onRetry()
        this.loadData()
    }

    /**
     * 返回上一级页面
     */
    back = () => {
        PageRouter.pop()
    }

    /**
     * 若在当前页面操作完毕返回上一个面后，上一个页面需要刷新，则使用该方法返回上一个页面
     * 该方法的效果类似android 平台的onActivityResult
     * @param data 需要传递到上一个页面的数据
     */
    backWithResult = (data) => {
        PageRouter.pop({refresh: {refreshOnResume: true, onResumeData: data}})
    }

    /**
     * 返回上一级并刷新
     */
    backWithRefresh = () => {
        this.refreshAfterBack = true
        PageRouter.pop()
    }

    /**
     * 返回上一级页面并刷新
     */
    refreshAfterBackPressed = () => {
        if (!this.refreshAfterBack) {
            return
        }
        setTimeout(() => Actions.refresh(), 10)
    }

    onResume(data) {
        console.log('onResume')
    }

    isLoadingSuccess = () => {
        return this.pageStore.isLoadingSuccess()
    }

    isLoading = () => {
        return this.pageStore.isLoading()
    }

    isLoadingError = () => {
        return this.pageStore.isError()
    }

    isLoadingEmpty = () => {
        return this.pageStore.isEmpty()
    }

    getCurrentLoadingState = () => {
        return this.pageStore.getCurrentLoadingState()
    }

    getLoadingErrorMsg = () => {
        return '噢，加载出错了...'
    }

    getLoadingEmptyMsg = () => {
        return '未加载到数据...'
    }

    getExceptionMsgDefault = () => {
        return this.pageStore.isError() ? this.getLoadingErrorMsg() : this.getLoadingEmptyMsg()
    }

    getLabelOfExceptionLayout = () => {
        return '重新加载'
    }

    getEmptyImg = () => {
        return require('../resource/image/icon_no_data.png')
    }

    getExceptionImg = () => {
        return require('../resource/image/icon_data_error.png')
    }

    getOnRetry() {
        return this.onRetry
    }

    getExceptionLayout = () => {
        //console.warn(`current state:[isLoading:${this.isLoading()}] [isEmpty:${this.isLoadingEmpty()}] [isError:${this.isLoadingError()}]`)
        return <ExceptionLayout
            isLoading={this.isLoading()}
            isEmpty={this.isLoadingEmpty()}
            isError={this.isLoadingError()}
            emptyImg={this.getEmptyImg()}
            exceptionImg={this.getExceptionImg()}
            exceptionMsg={this.getExceptionMsgDefault()}
            btnLabel={this.getLabelOfExceptionLayout()}
            onRetry={this.getOnRetry().bind(this)}/>
    }

    getTitle() {
        return 'title'
    }

    /**
     * 标题栏是否显示返回按钮
     * @returns {boolean}
     */
    showBackLabel() {
        return true
    }

    /**
     * 顶部栏返回按钮右侧标签，默认为空
     * @returns {null}
     */
    getBackLabel() {
        return null
    }

    /**
     * 顶部栏右侧option label，默认为空
     */
    getOptionLabel() {
        return null
    }

    /**
     * 顶部栏按钮点击事件
     */
    getOptionFunc() {
        return null
    }

    /**
     * 是否使用主色调背景色标题栏
     */
    usePrimaryColorTitleBar() {
        return true
    }

    /**
     * 是否要展示title
     * @returns {boolean}
     */
    shouldShowTitle() {
        return true
    }

    /**
     * 自定义标题栏返回按钮事件
     */
    getBackFunc() {
        return this.back
    }

    renderTitle() {
        return <TitleBar
            backFunc={this.getBackFunc()}
            showBack={this.showBackLabel()}
            backLabel={this.getBackLabel()}
            title={this.getTitle()}
            optionLabel={this.getOptionLabel()}
            optionFunc={this.getOptionFunc()}
            primaryStyle={this.usePrimaryColorTitleBar()}/>
    }

    renderContent() {
        return <Text>Content</Text>
    }

    renderException() {
        return this.getExceptionLayout()
    }

    render() {
        //console.warn(`render page [state:${this.getCurrentLoadingState()}]`)
        return (
            <View style={styles.base}>
                {this.shouldShowTitle() ? this.renderTitle() : null}
                {
                    this.isLoadingSuccess() ? this.renderContent() : this.renderException()
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    base: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    }
})