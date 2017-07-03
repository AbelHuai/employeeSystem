/**
 * Created by Abel on 2017/6/26.
 */
import React, {PropTypes} from 'react'
import {TouchableWithoutFeedback, View, Text, StyleSheet} from 'react-native'
import GlobalStyle from '../../style/styles'
import FormatDate from '../../utils/formatDate'

const classificationItemProps = {
    classificationInfo: PropTypes.object,
    onClick: PropTypes.func,
}
const ClassificationItem = ({
    classificationInfo,
    onClick,
}) => {
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <Text style={styles.content}>{classificationInfo}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: GlobalStyle.sizes.size_30,
        paddingRight: GlobalStyle.sizes.size_30,
        paddingTop: GlobalStyle.sizes.size_40,
        paddingBottom: GlobalStyle.sizes.size_40,
        backgroundColor: GlobalStyle.colors.white,
    },
    content: {
        fontSize: GlobalStyle.fonts.font_34,
        color: GlobalStyle.colors.color_font_main,
        lineHeight: GlobalStyle.lineHeight.height_54,
    },
})

ClassificationItem.prototype = classificationItemProps
export default ClassificationItem