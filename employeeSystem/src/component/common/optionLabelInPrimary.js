/**
 * Created by otto on 2017/5/31.
 */
import React, {PropTypes} from 'react'
import {Text} from 'react-native'
import StyleConfig from '../../style/styles'

const labelProps = {
    text: PropTypes.string,
}
const OptionLabelIPrimary = ({text}) => {
    return <Text style={StyleConfig.style.optionLabelInPrimary}>{text}</Text>
}

OptionLabelIPrimary.prototype = labelProps
export default OptionLabelIPrimary