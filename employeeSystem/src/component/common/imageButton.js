/**
 * Created by otto on 2017/5/15.
 */
import React, {PropTypes} from 'react'
import {StyleSheet, View, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'

import StyleConfig from '../../style/styles'

const imageButtonProps = {
    source: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    borderColor: PropTypes.number,
    borderWidth: PropTypes.number,
    style: PropTypes.number,
    onClick: PropTypes.number,
}
const ImageButton = ({
                         source,
                         width = StyleConfig.sizes.size_60,
                         height = StyleConfig.sizes.size_60,
                         borderColor = StyleConfig.colors.transparent,
                         borderWidth = StyleConfig.sizes.size_1,
                         style,
                         onClick,
                     }) => {

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={[styles.container, style, {width: width, height: height,},]}>
                <Image
                    source={source}
                    style={[styles.img, {
                        width: width, height: height,
                        borderRadius: 0,
                        borderColor: borderColor,
                        borderWidth: borderWidth
                    }]}
                    resizeMode={Image.resizeMode.center}/>
            </View>
        </TouchableWithoutFeedback>
    )
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


ImageButton.prototype = imageButtonProps
export default ImageButton
