/**
 * Created by otto on 2017/5/19.
 */

import React, {PropTypes} from 'react'

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import StyleConfig from '../../style/styles'
import * as MedicationUtil from '../../utils/medicationUtil'

const medicineItemProps = {
    medicineData: PropTypes.object,
    onClick: PropTypes.func,
}
const MedicineItem = ({medicineData, onClick}) => {
/*
 {`${ medicineData.goodsName ? medicineData.goodsName + '  ' + (medicineData.commonName || '')
 : (medicineData.commonName || '') + '  ' + (medicineData.manufactorShortName || '')}`}
* */
    return (
        <TouchableOpacity onPress={() => {
            if (onClick) {
                onClick(medicineData)
            }
        }}>
            <View style={styles.container}>
                <Text style={styles.name}>
                    {MedicationUtil.getMedication(medicineData.goodsName,medicineData.commonName,medicineData.manufactorShortName)}
                </Text>
                <Text style={styles.productor}>{medicineData.manufactor || ''}</Text>
                <Text style={styles.likeCount}>
                    {medicineData.commentTimes}条药师点评 | {medicineData.consultationTimes}条用户咨询
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleConfig.colors.color_global_bg,
        //paddingLeft: StyleConfig.sizes.size_30,
        paddingTop: StyleConfig.sizes.size_40,
        paddingBottom: StyleConfig.sizes.size_40,
        backgroundColor: StyleConfig.colors.white,
    },
    name: {
        fontSize: StyleConfig.fonts.font_34,
        color: StyleConfig.colors.color_font_main,
    },
    productor: {
        marginTop: StyleConfig.sizes.size_20,
        fontSize: StyleConfig.fonts.font_30,
        color: StyleConfig.colors.color_font_second,
    },
    likeCount: {
        marginTop: StyleConfig.sizes.size_30,
        fontSize: StyleConfig.fonts.font_26,
        color: StyleConfig.colors.color_font_third,
    },
})

MedicineItem.prototype = medicineItemProps
export default MedicineItem