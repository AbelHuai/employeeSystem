/**
 * 红点
 * Created by otto on 2017/6/6.
 */


import React, {PropTypes} from 'react'
import {StyleSheet, View,} from 'react-native'
import {observer} from 'mobx-react/native'
import BaseComponent from '../baseComponent'

import StyleConfig from '../../style/styles'

@observer
export default class RedDot extends BaseComponent {
    static propTypes = {
        size: PropTypes.number,
        borderColor: PropTypes.number,
        borderWidth: PropTypes.number,
        color: PropTypes.string,
        style: PropTypes.number,
        visible: PropTypes.bool,
    }

    render() {
        const {
            size = StyleConfig.sizes.size_20,
            borderColor = StyleConfig.colors.transparent,
            borderWidth = 0,
            color = StyleConfig.colors.color_primary,
            visible,
            style
        } = this.props
        return <View
            style={[styles.dot, {
                width: size, height: size,
                borderRadius: size / 2,
                borderColor: borderColor,
                borderWidth: borderWidth,
            }, style, {backgroundColor: visible ? color : StyleConfig.colors.transparent}]}/>
    }
}

const styles = StyleSheet.create({
    dot: {},
})