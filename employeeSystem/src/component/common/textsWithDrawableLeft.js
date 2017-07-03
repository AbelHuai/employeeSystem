/**
 * 图片右侧有两个标签
 * Created by kimOtto on 2017/4/10.
 */
import React, {PropTypes} from 'react'
import {StyleSheet, TouchableWithoutFeedback, View, Image} from 'react-native'

const TextProps = {
    text1: PropTypes.node,
    text2: PropTypes.node,
    icon: PropTypes.number,
    iconSize: PropTypes.number,
    style: PropTypes.number,
    iconStyle: PropTypes.number,
    onClick: PropTypes.func,
}

const TextsWithDrawableLeft = ({
                                   text1,
                                   text2,
                                   icon,
                                   iconSize,
                                   style,
                                   iconStyle,
                                   onClick = () => {
                                   },
                               }) => {

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={[styles.root, style]}>
                <Image
                    resizeMode={Image.resizeMode.contain}
                    source={icon}
                    style={[{
                        width: iconSize,
                        height: iconSize,
                    }, iconStyle]}/>
                {text1}
                {text2}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})

TextsWithDrawableLeft.prototype = TextProps
export default TextsWithDrawableLeft