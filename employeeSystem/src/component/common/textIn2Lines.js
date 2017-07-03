/**
 * Created by otto on 2017/5/9.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native'
import TextAlignVertical from './textAlignVertical'

const TextIn2LinesProps = {
    titleFirst: PropTypes.string,
    titleSecond: PropTypes.string,
    styleTitleFirst: PropTypes.number,
    styleTitleSecond: PropTypes.number,
    style: PropTypes.number,
    paddingBetween: PropTypes.number,
    clickTitleFirst: PropTypes.func,
    clickTitleSecond: PropTypes.func,
    onClick: PropTypes.func,
}

const emptyClick = () => {
    console.warn('empty')
}

const TextIn2Lines = ({
                          titleFirst,
                          titleSecond,
                          styleTitleFirst,
                          styleTitleSecond,
                          style,
                          paddingBetween,
                          clickTitleFirst = emptyClick,
                          clickTitleSecond = emptyClick,
                          onClick,
                      }) => {
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={[styles.container, style]}>
                <TextAlignVertical text={titleFirst} style={styleTitleFirst}/>
                <TextAlignVertical text={titleSecond} style={[{marginTop: paddingBetween}, styleTitleSecond]}/>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

TextIn2Lines.prototype = TextIn2LinesProps
export default TextIn2Lines