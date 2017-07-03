/**
 * Created by otto on 2017/5/9.
 */

import React, {PropTypes} from 'react'

import {StyleSheet, View} from 'react-native'
import px2dp from '../../utils/px2dp'
import StyleConfig from '../../style/styles'

const LineProps = {
    lineWidth: PropTypes.number,
    backgroundColor: PropTypes.string,
    style: PropTypes.number,
    height: PropTypes.number,
}
const LineV = ({lineWidth = px2dp(1), height, backgroundColor = StyleConfig.colors.color_line, style}) => {

    return (
        <View style={[styles.line, {
            width: lineWidth,
        }, style, {height: height ? height : null}, {backgroundColor: backgroundColor}]}/>
    )
}

const styles = StyleSheet.create({
    line: {
        backgroundColor: 'red',
    }
})

LineV.prototype = LineProps
export default LineV