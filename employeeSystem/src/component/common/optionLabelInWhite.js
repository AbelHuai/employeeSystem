/**
 * Created by otto on 2017/5/31.
 */

import React, {PropTypes} from 'react'
import {Text} from 'react-native'
import StyleConfig from '../../style/styles'

const labelProps = {
    text: PropTypes.string,
}
const OptionLabelInWhite = ({text}) => {
    return <Text style={StyleConfig.style.optionLabelInWhite}>{text}</Text>
}

OptionLabelInWhite.prototype = labelProps
export default OptionLabelInWhite