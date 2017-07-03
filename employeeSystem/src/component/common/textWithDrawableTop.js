/**
 * Created by kimOtto on 2017/4/10.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View, Image} from 'react-native'

import TextAlignVertical from './textAlignVertical'
import GlobalStyle from '../../style/styles'

const TextProps = {
    text: PropTypes.string.isRequired,
    fontSize: PropTypes.number,
    textColor: PropTypes.string,
    txtBgColor: PropTypes.string,
    icon: PropTypes.object,
    iconSize: PropTypes.number,
    iconRadius: PropTypes.number,
    paddingBetween: PropTypes.number,
    style: PropTypes.number,
    onClick: PropTypes.func,
}

const TextWithDrawableTop = ({
                                 text,
                                 fontSize,
                                 textColor,
                                 txtBgColor,
                                 icon,
                                 iconSize,
                                 iconRadius,
                                 paddingBetween,
                                 style,
                                 onClick = () => {
                                 },
                             }) => {

    const child = (
        <View style={[styles.root, style]}>
            <Image
                source={icon}
                style={{
                    width: iconSize,
                    height: iconSize,
                    resizeMode: Image.resizeMode.contain,
                    borderRadius: iconRadius,
                }}/>
            <TextAlignVertical text={text} style={{
                fontSize: fontSize ? fontSize : GlobalStyle.fonts.font_24,
                color: textColor ? textColor : GlobalStyle.colors.black,
                backgroundColor: txtBgColor ? txtBgColor : GlobalStyle.colors.transparent,
                marginTop: paddingBetween ? paddingBetween : GlobalStyle.sizes.size_10,
            }}/>
        </View>
    )
    if (onClick) {
        return (
            <TouchableOpacity onPress={onClick}>
                {child}
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableWithoutFeedback>
                {child}
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

TextWithDrawableTop.prototype = TextProps
export default TextWithDrawableTop
