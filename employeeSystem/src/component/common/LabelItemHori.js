/**
 * Created by otto on 2017/5/9.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, View, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import TextAlignVertical from './textAlignVertical'
import LineH from './lineH'
import StyleConfig from '../../style/styles'

const LabelItemHoriProps = {
    text: PropTypes.string,
    icon: PropTypes.number,
    iconSize: PropTypes.number,
    showTopLine: PropTypes.bool,
    showUnderLine: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.number,
    textStyle: PropTypes.number,
    height: PropTypes.number,
    topLineLeftPadding: PropTypes.number,
    topLineRightPadding: PropTypes.number,
    underLineLeftPadding: PropTypes.number,
    underLineRightPadding: PropTypes.number,
}
const LabelItemHori = ({
                           text,
                           icon,
                           iconSize,
                           showTopLine=true,
                           showUnderLine=true,
                           style,
                           textStyle,
                           height,
                           topLineLeftPadding = 0,
                           topLineRightPadding = 0,
                           underLineLeftPadding = 0,
                           underLineRightPadding = 0,
                           onClick = () => {
                           }
                       }) => {
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={[styles.container, style]}>
                <TextAlignVertical
                    text={text}
                    style={[{
                        height: StyleConfig.sizes.size_80,
                        fontSize: StyleConfig.fonts.font_24
                    }, textStyle]}/>
                <TouchableOpacity onPress={onClick}>
                    <Image style={{width: iconSize, height: iconSize}} source={icon} resizeMode={Image.resizeMode.contain}/>
                </TouchableOpacity>
                {
                    showTopLine ?
                        <LineH style={{
                            position: 'absolute',
                            left: topLineLeftPadding,
                            right: topLineRightPadding,
                            top: 0,
                            backgroundColor: StyleConfig.colors.gray_f346,
                            height:StyleConfig.sizes.size_2,
                        }}/> : null
                }
                {
                    showUnderLine ?
                        <LineH style={{
                            position: 'absolute',
                            left: underLineLeftPadding,
                            right: underLineRightPadding,
                            bottom: 0,
                            backgroundColor: StyleConfig.colors.gray_f346,
                            height:StyleConfig.sizes.size_2,
                        }}/> : null
                }
            </View>
        </TouchableWithoutFeedback>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})

LabelItemHori.prototype = LabelItemHoriProps
export default LabelItemHori