/**
 * 显示空页面，错误页面，加载中页面
 * Created by kimOtto on 2017/4/7.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'

import  px2dp from '../../utils/px2dp'
import GlobalStyle from '../../style/styles'
import TextAlignVertical from './textAlignVertical'

const ExceptionLayoutProps = {
    isLoading: PropTypes.bool,
    isEmpty: PropTypes.bool,
    isError: PropTypes.bool,
    emptyImg: PropTypes.number,
    exceptionImg: PropTypes.number,
    exceptionMsg: PropTypes.string,
    btnLabel: PropTypes.string,
    onRetry: PropTypes.func,
}

const ExceptionLayout = ({isLoading, isEmpty, isError, emptyImg, exceptionImg, exceptionMsg, btnLabel, onRetry}) => {

    // console.warn(`isEmpty:${isEmpty} emptyImg:${emptyImg}`)

    let defaultImg = null
    if (!emptyImg && !exceptionImg) {
        defaultImg = require('../../resource/image/icon_data_error.png')
    } else {
        defaultImg = (isEmpty ? emptyImg : exceptionImg)
    }

    if (isLoading) {
        return (
            <View style={styles.loadingRoot}>
                <Image
                    style={styles.loadingImg}
                    source={require('../../resource/image/loading.gif')}/>
            </View>
        )
    } else {
        return (
            <View style={styles.root}>
                <Image
                    style={styles.img}
                    source={defaultImg}/>
                <Text style={styles.exceptionMsg}>{exceptionMsg}</Text>
                {
                    (!isEmpty || isError) &&
                    <TouchableOpacity onPress={onRetry}>
                        <TextAlignVertical text={btnLabel || '重新加载'} style={styles.retryBtn}/>
                    </TouchableOpacity>
                }
            </View>
        )
    }

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: px2dp(190)
    },
    loadingRoot: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    loadingImg: {
        width: px2dp(32),
        height: px2dp(32),
    },
    img: {
        width: px2dp(158),
        height: px2dp(158),
        resizeMode: Image.resizeMode.contain,
    },
    exceptionMsg: {
        color: GlobalStyle.colors.gray_all_3,
        fontSize: GlobalStyle.fonts.font_26,
        padding: GlobalStyle.sizes.size_40,
    },
    retryBtn: {
        color: GlobalStyle.colors.gray_all_1,
        height: GlobalStyle.sizes.size_50,
        fontSize: GlobalStyle.fonts.font_24,
        borderColor: GlobalStyle.colors.gray_all_1,
        borderRadius: GlobalStyle.sizes.size_10,
        borderWidth: px2dp(1),
        paddingLeft: GlobalStyle.sizes.size_20,
        paddingRight: GlobalStyle.sizes.size_20,
    },
})

ExceptionLayout.prototype = ExceptionLayoutProps

export default ExceptionLayout
