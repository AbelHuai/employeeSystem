/**
 * Created by otto on 2017/5/12.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, Text} from 'react-native'

import StyleConfig from '../../style/styles'

const textsProps = {
    titleMain: PropTypes.string,
    titleMainStyle: PropTypes.number,
    titleSecond: PropTypes.string,
    titleSecondStyle: PropTypes.number,
    titleThird: PropTypes.string,
    titleThirdStyle: PropTypes.number,
}

const TextsInLine = ({titleMain, titleMainStyle, titleSecond, titleSecondStyle, titleThird, titleThirdStyle}) => {
    return (
        <Text style={titleMainStyle}>
            {titleMain}
            {titleSecond ?
                <Text style={titleSecondStyle}>
                    {titleSecond}
                    {
                        <Text style={titleThirdStyle}>{titleThird}</Text>
                    }
                </Text>
                : null
            }
        </Text>
    )
}

TextsInLine.prototype = textsProps
export default TextsInLine
