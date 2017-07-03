/**
 * Created by kimOtto on 2017/4/10.
 */

import React, {PropTypes} from 'react'

import {StyleSheet, View} from 'react-native'
import px2dp from '../../utils/px2dp'
import StyleConfig from '../../style/styles'

const LineProps = {
    isHorizontal: PropTypes.bool,
    lineWidth: PropTypes.number,
    backgroundColor: PropTypes.string,
    style: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
}
const Line = ({isHorizontal = true, lineWidth = px2dp(1), width, height, style, backgroundColor}) => {

    const orgStyle = style && StyleSheet.flatten(style)
    const widthFinal = width || (orgStyle && orgStyle.width)
    const heightFinal = height || (orgStyle && orgStyle.height)

    return (
        <View style={[styles.line, {
            width: isHorizontal ? widthFinal || StyleConfig.screen.width : lineWidth,
            height: isHorizontal ? lineWidth : heightFinal || px2dp(1),
        }, style, {backgroundColor: backgroundColor}]}/>
    )
}

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#fff',
    }
})

Line.prototype = LineProps
export default Line
