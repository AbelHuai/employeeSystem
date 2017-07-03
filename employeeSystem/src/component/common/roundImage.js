/**
 * Created by otto on 2017/5/11.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, View, Image, TouchableWithoutFeedback} from 'react-native'

import StyleConfig from '../../style/styles'

const roundImgProps = {
    source: PropTypes.string,
    size: PropTypes.number,
    borderColor: PropTypes.number,
    borderWidth: PropTypes.number,
    onClick: PropTypes.number,
}
const RoundImage = ({
                        source,
                        size = StyleConfig.sizes.size_60,
                        borderColor = StyleConfig.colors.transparent,
                        borderWidth = StyleConfig.sizes.size_1,
                        onClick,
                    }) => {

    if (!onClick) {
        return <Image
            source={source}
            style={[styles.img, {
                width: size, height: size,
                borderRadius: size / 2,
                borderColor: borderColor,
                borderWidth: borderWidth,
            }]}
            resizeMode={Image.resizeMode.cover}/>
    } else {
        return (
            <TouchableWithoutFeedback onPress={onClick}>
                <View style={[styles.container, {width: size, height: size,}]}>
                    <Image
                        source={source}
                        style={[styles.img, {
                            width: size,
                            height: size,
                            borderRadius: size / 2,
                            borderColor: borderColor,
                            borderWidth: borderWidth
                        }]}
                        resizeMode={Image.resizeMode.cover}/>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: StyleConfig.sizes.size_60,
        height: StyleConfig.sizes.size_60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: StyleConfig.sizes.size_60,
        height: StyleConfig.sizes.size_60,
        borderWidth: StyleConfig.sizes.size_1,
        borderColor: StyleConfig.colors.gray_all_6,
        borderRadius: StyleConfig.sizes.size_30,
        overflow: 'hidden',
    },
})


RoundImage.prototype = roundImgProps
export default RoundImage
