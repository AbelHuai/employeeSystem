/**
 * Created by otto on 2017/5/10.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, View, Image} from 'react-native'

const ImagesProps = {
    images: PropTypes.array.isRequired,
    iconSize: PropTypes.number,
    paddingBetween: PropTypes.number,
    containerStyle: PropTypes.number,
}

const ImagesH = ({
                     images,
                     iconSize,
                     paddingBetween,
                     containerStyle,
                 }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {images.map((e, index) => {
                return <Image
                    key={index}
                    source={e}
                    resizeMode={Image.resizeMode.center}
                    style={{
                        width: iconSize,
                        height: iconSize,
                        marginRight: paddingBetween,
                    }}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

ImagesH.prototype = ImagesProps
export default ImagesH

