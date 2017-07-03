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
    paddingBetween: PropTypes.number,
    style: PropTypes.number,
    iconStyle: PropTypes.number,
    onClick: PropTypes.func,
}

const TextWithDrawableLeft = ({
                                  text,
                                  fontSize,
                                  textColor,
                                  txtBgColor,
                                  icon,
                                  iconSize,
                                  resizeMode,
                                  paddingBetween,
                                  style,
                                  iconStyle,
                                  onClick,
                              }) => {

    const child = (
        <View style={[styles.root, style]}>
            <Image
                source={icon}
                style={[{
                    width: iconSize,
                    height: iconSize,
                }, iconStyle]}
                resizeMode={resizeMode ? resizeMode : Image.resizeMode.center}/>
            <TextAlignVertical text={text} style={{
                fontSize: fontSize ? fontSize : GlobalStyle.fonts.font_24,
                color: textColor ? textColor : GlobalStyle.colors.black,
                backgroundColor: txtBgColor ? txtBgColor : GlobalStyle.colors.transparent,
                marginLeft: paddingBetween ? paddingBetween : GlobalStyle.sizes.size_10,
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})

TextWithDrawableLeft.prototype = TextProps
export default TextWithDrawableLeft