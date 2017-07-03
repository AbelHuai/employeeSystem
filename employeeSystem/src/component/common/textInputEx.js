/**
 * Created by otto on 2017/5/11.
 */

import React, {PropTypes} from 'react'
import {StyleSheet, View, TextInput, Text, TouchableWithoutFeedback} from 'react-native'
import {observer} from 'mobx-react/native'

import BaseComponent from '../baseComponent'
import StyleConfig from '../../style/styles'

import Label from './label'

@observer
export default class TextInputEx extends BaseComponent {

    static propTypes = {
        label: PropTypes.string,
        labelWidth: PropTypes.number,
        hint: PropTypes.string,
        numberOfLines: PropTypes.number,
        multiline: PropTypes.bool,
        maxLength: PropTypes.number,
        operationTag: PropTypes.node,
        operationTagWidth: PropTypes.number,
        height: PropTypes.number,
        onTextChangeListener: PropTypes.func,
        onOperationTagClick: PropTypes.func,
        editable: PropTypes.bool,
        style: PropTypes.number,
    }

    textInput

    constructor(props) {
        super(props)
    }

    render() {
        const {
            label,
            labelWidth = 0,
            hint,
            numberOfLines = 1,
            multiline = false,
            maxLength,
            operationTag,
            operationTagWidth = 0,
            height,
            editable = true,
            onTextChangeListener = (text) => {
            },
            onOperationTagClick = () => {
            },
            style,
        } = this.props
        let heightFinal = height
        if (!heightFinal) {
            heightFinal = (style && StyleSheet.flatten(style).height) || StyleConfig.sizes.size_80
        }
        return (
            <View style={[styles.container, style]}>
                <TextInput
                    {...this.props}
                    ref={(textInput) => {
                        this.textInput = textInput
                    }}
                    style={[styles.textInput, {
                        paddingLeft: labelWidth,
                        paddingRight: operationTagWidth,
                        height: heightFinal
                    }]}
                    maxLength={maxLength}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    placeholder={hint}
                    placeholderTextColor={StyleConfig.colors.gray_all_c}
                    onChangeText={(text) => {
                        onTextChangeListener(text)
                    }}
                    underlineColorAndroid='transparent'
                    editable={editable}/>
                <Label style={[styles.label, {height: heightFinal}]} text={label}/>
                <TouchableWithoutFeedback onPress={() => {
                    onOperationTagClick(this.textInput)
                }}>
                    <View style={[styles.operationTag, {height: heightFinal}]}>{operationTag}</View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: StyleConfig.sizes.size_80,
        alignItems: 'center',
    },
    label: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: StyleConfig.sizes.size_80,
        fontSize: StyleConfig.fonts.font_24
    },
    operationTag: {
        position: 'absolute',
        right: 0,
        top: 0,
        height: StyleConfig.sizes.size_80,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    textInput: {
        flex: 1,
        borderWidth: 0,
    },
})