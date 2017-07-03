/**
 * Created by otto on 2017/5/10.
 */

import React, {PropTypes} from 'react'
import {TouchableWithoutFeedback, View, StyleSheet} from 'react-native'
import GlobalStyle from '../../style/styles'
import Label from './label'
import px2dp from '../../utils/px2dp'
import LineH from '../../component/common/lineH'

const ButtonProps = {
    fontSize: PropTypes.number,
    color: PropTypes.string,
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    style: PropTypes.number,
    height: PropTypes.number,
    onClick: PropTypes.func,
}
const ButtonInLine = ({
                          fontSize = GlobalStyle.fonts.font_24,
                          color = GlobalStyle.colors.black,
                          text,
                          backgroundColor = GlobalStyle.colors.transparent,
                          onClick = () => {
                          },
                          style,
                          height,
                      }) => {
    const heightFinal = height || (style && StyleSheet.flatten(style).height)
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={[style, {flexDirection: 'column', alignItems: 'center', justifyContent:'space-between', height: heightFinal + px2dp(20)},]}>
                {/*<LineH width={GlobalStyle.screen.width}
                       backgroundColor={GlobalStyle.colors.gray_all_ce}/>*/}
                <Label text={text}
                       fontSize={fontSize}
                       color={color}
                       backgroundColor={backgroundColor}
                       borderWidth={0}
                       style={[{height: heightFinal}]}/>
                {/*<LineH width={GlobalStyle.screen.width}
                       backgroundColor={GlobalStyle.colors.gray_all_ce}/>*/}
            </View>
        </TouchableWithoutFeedback>
    )
}

ButtonInLine.prototype = ButtonProps
export default ButtonInLine