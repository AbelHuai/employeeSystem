/**
 * 垂直居中显示的文本空间（针对iOS做兼容）
 * style中必须有height和fontSize属性
 * Created by kimOtto on 2017/4/7.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, Text, Platform,} from 'react-native'

const TextAlignVerticalProps = {
    text: PropTypes.string.isRequired,
    numberOfLines: PropTypes.number,
    onPress: PropTypes.func,
    style: PropTypes.string,
    child: PropTypes.node,
}

const TextAlignVertical = ({text, numberOfLines = 1, style, child, onPress}) => {
    const orgStyle = StyleSheet.flatten(style);
    let paddingTop
    if (orgStyle && orgStyle.height && orgStyle.fontSize) {
        paddingTop = (orgStyle.height - orgStyle.fontSize) / 2;
    }
    return (
        <Text
            style={[{
                paddingTop: Platform.OS === 'ios' ? paddingTop : null,
                overflow: 'hidden',
                textAlignVertical: 'center',
                textAlign: 'center',
            },style]}
            onPress={onPress}
            numberOfLines={numberOfLines}>
            {text}
            {child}
        </Text>
    )
}

TextAlignVertical.prototype = TextAlignVerticalProps
export default TextAlignVertical