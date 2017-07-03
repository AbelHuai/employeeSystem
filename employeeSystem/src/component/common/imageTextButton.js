/**
 * Created by Abel on 2017/5/24.
 */
import React, {PropTypes} from 'react'
import {StyleSheet, View, Image, TouchableWithoutFeedback, TouchableOpacity, Text} from 'react-native'

import StyleConfig from '../../style/styles'

const imageTextButtonProps = {
    source: PropTypes.number,
    text: PropTypes.number,
    style: PropTypes.number,
    onClick: PropTypes.func,
}
const ImageTextButton = ({
    source,
    text,
    style,
    onClick,
}) => {

    return (
        <TouchableOpacity onPress={onClick} style={[styles.container, style,]}>
            <View style={[styles.container, style,]}>
                <Image
                    source={source}
                    style={styles.img}/>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: StyleConfig.sizes.size_30,
        height: StyleConfig.sizes.size_30,
    },
    text: {
        marginLeft: StyleConfig.sizes.size_20,
        color: StyleConfig.colors.color_font_second,
        fontSize: StyleConfig.fonts.font_30,

    }
})


ImageTextButton.prototype = imageTextButtonProps
export default ImageTextButton