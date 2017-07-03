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
    width: PropTypes.number,
}
const LineH = ({lineWidth = px2dp(1), width, backgroundColor = StyleConfig.colors.color_line, style}) => {

    return (
        <View style={[styles.line,
            {height: lineWidth},
            {backgroundColor: backgroundColor},
            style,
            {width: width ? width : null},
        ]}/>
    )
}

const styles = StyleSheet.create({
    line: {
        backgroundColor: 'red',
    }
})

LineH.prototype = LineProps
export default LineH