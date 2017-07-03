/**
 * 通用textInput，在android手机上不显示底部线条
 * Created by otto on 2017/5/23.
 */
import React, {PropTypes} from 'react'
import {TextInput} from 'react-native'
import BaseComponent from '../baseComponent'

export default class TextInputCommon extends BaseComponent {

    textInput

    constructor(props) {
        super(props)
    }

    render() {
        return <TextInput ref={(textInput) => this.textInput = textInput}
                          underlineColorAndroid={'#00000000'}
                          {...this.props}
                          style={[{
                              paddingTop: 0,
                              paddingBottom: 0,
                          }, this.props.style]}/>
    }

    /**
     * 清除textInput内容
     */
    clear() {
        this.textInput.clear()
    }

    /**
     * 设置textInput内容
     * @param textValue
     */
    setText(textValue) {
        this.textInput.setNativeProps({text: textValue})
    }
}