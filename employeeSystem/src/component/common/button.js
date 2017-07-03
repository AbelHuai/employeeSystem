/**
 * Created by otto on 2017/5/9.
 */

import React, {PropTypes} from 'react'
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native'
import GlobalStyle from '../../style/styles'
import Label from './label'
import px2dp from '../../utils/px2dp'

const ButtonProps = {
    fontSize: PropTypes.number,
    color: PropTypes.string,
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.number,
    style: PropTypes.number,
    buttonStyle: PropTypes.number,
    height: PropTypes.number,
    onClick: PropTypes.func,
}
const Button = ({
                    fontSize = GlobalStyle.fonts.font_24,
                    color = GlobalStyle.colors.black,
                    text,
                    backgroundColor = GlobalStyle.colors.transparent,
                    borderWidth = px2dp(1),
                    borderColor = GlobalStyle.colors.transparent,
                    borderRadius = 0,
                    onClick = () => {
                    },
                    style,
                    buttonStyle,
                    height,
                }) => {
    const heightFinal = height || (style && StyleSheet.flatten(style).height) || (buttonStyle && StyleSheet.flatten(buttonStyle).height)
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={[{height: heightFinal}, buttonStyle]}>
                <Label text={text}
                       fontSize={fontSize}
                       color={color}
                       backgroundColor={backgroundColor}
                       borderWidth={borderWidth}
                       borderColor={borderColor}
                       borderRadius={borderRadius}
                       style={[style, {height: heightFinal}]}/>
            </View>
        </TouchableWithoutFeedback>
    )
}

Button.prototype = ButtonProps
export default Button