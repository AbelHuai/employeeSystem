/**
 * Created by otto on 2017/5/10.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native'

import StyleConfig from '../../style/styles'
import LineH from '../../component/common/lineH'

const WidgetProps = {
    childLeft: PropTypes.node,
    childRight: PropTypes.node,
    height: PropTypes.number,
    width: PropTypes.number,
    showTopLine: PropTypes.bool,
    showUnderLine: PropTypes.bool,
    topLineLeftPadding: PropTypes.number,
    topLineRightPadding: PropTypes.number,
    underLineLeftPadding: PropTypes.number,
    underLineRightPadding: PropTypes.number,
    styleRoot: PropTypes.number,
    onClick: PropTypes.func,
}

const WidgetInLineOfBetween = ({
                                   childLeft,
                                   childRight,
                                   height,
                                   width,
                                   showTopLine = true,
                                   showUnderLine = true,
                                   topLineLeftPadding = 0,
                                   topLineRightPadding = 0,
                                   underLineLeftPadding = 0,
                                   underLineRightPadding = 0,
                                   styleRoot,
                                   onClick,
                               }) => {
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={[styles.container, {height: height, width: width}, styleRoot]}>
                {childLeft}
                {childRight}
                {
                    showTopLine ?
                        <LineH style={{
                            position: 'absolute',
                            left: topLineLeftPadding,
                            right: topLineRightPadding,
                            top: 0,
                            backgroundColor: StyleConfig.colors.color_line,
                        }}/> : null
                }
                {
                    showUnderLine ?
                        <LineH
                            style={{
                                position: 'absolute',
                                left: underLineLeftPadding,
                                right: underLineRightPadding,
                                bottom: 0,
                                backgroundColor: StyleConfig.colors.color_line,
                            }}/> : null
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: StyleConfig.sizes.size_80,
    },
})

WidgetInLineOfBetween.prototype = WidgetProps
export default WidgetInLineOfBetween

