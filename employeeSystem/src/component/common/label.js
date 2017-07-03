/**
 * Created by kimOtto on 2017/4/10.
 */

import React, {PropTypes} from 'react'

import TextAlignVertical from './textAlignVertical'
import GlobalStyle from '../../style/styles'

const LabelProps = {
    fontSize: PropTypes.number,
    color: PropTypes.string,
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.number,
    numberOfLines: PropTypes.number,
    style: PropTypes.number,
}
const Label = ({
                   fontSize = GlobalStyle.fonts.font_24,
                   color = GlobalStyle.colors.black,
                   text,
                   backgroundColor = GlobalStyle.colors.transparent,
                   borderWidth = 0,
                   borderColor = GlobalStyle.colors.transparent,
                   borderRadius = 0,
                   numberOfLines = 1,
                   style,
               }) => {
    return (
        <TextAlignVertical
            text={text}
            numberOfLines={numberOfLines}
            style={[{
                fontSize: fontSize,
                color: color,
                backgroundColor: backgroundColor,
                borderWidth: borderWidth,
                borderColor: borderColor,
                borderRadius: borderRadius,
            }, style]}/>
    )
}

Label.prototype = LabelProps
export default Label