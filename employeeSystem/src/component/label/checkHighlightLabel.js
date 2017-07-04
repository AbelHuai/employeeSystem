/**
 * Created by Abel on 2017/6/30.
 */
import React, {PureComponent, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Text,
} from 'react-native';
import StyleConfig from "../../style/styles";


export default class CheckHighlightLabel extends PureComponent {
    static propTypes = {
        data: PropTypes.object,
        selectBackgroundColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        selectBorderColor: PropTypes.string,
        borderColor: PropTypes.string,
        selectTextColor: PropTypes.string,
        textColor: PropTypes.string,
        multiSelect: PropTypes.bool,
        onPress: PropTypes.func,
        lableStyle: PropTypes.object,
    };

    static defaultProps = {
        data: {},
        lableStyle: {},
        selectBackgroundColor: StyleConfig.colors.color_primary,
        backgroundColor: StyleConfig.colors.white,
        selectBorderColor: StyleConfig.colors.transparent,
        borderColor: StyleConfig.colors.color_font_second,
        selectTextColor: StyleConfig.colors.white,
        textColor: StyleConfig.colors.color_font_main,
        multiSelect: false,
        onPress: () => {
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
        }
    }

    updateSelectedState = () => {
        this.setState({
            isSelected: !this.state.isSelected,
        })
    }

    render() {
        const {
            data,
            onPress,
            multiSelect,
            backgroundColor,
            selectBackgroundColor,
            textColor,
            selectTextColor,
            borderColor,
            selectBorderColor,
            lableViewStyle,
            lableStyle
        } = this.props
        return (
            <TouchableWithoutFeedback onPress={()=> {
               if(multiSelect) {
                  this.updateSelectedState()
               }
             onPress(!this.state.isSelected)
            }}>
                <View style={[
                          styles.lableView, lableViewStyle,
                          {
                              backgroundColor: this.state.isSelected ?  selectBackgroundColor: backgroundColor,
                              borderColor: this.state.isSelected  ? selectBorderColor : borderColor
                          }]}>
                    <Text
                        style={[styles.lable, lableStyle,
                        {
                            color: this.state.isSelected  ? selectTextColor : textColor
                        }]}>
                        {data.label}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    lableView: {
        marginTop: StyleConfig.sizes.size_30,
        marginLeft: StyleConfig.sizes.size_30,
        height: StyleConfig.sizes.size_60,
        // width: (StyleConfig.screen.width - StyleConfig.sizes.size_150) / 2,
        borderRadius: StyleConfig.sizes.size_30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleConfig.sizes.size_1,
        paddingHorizontal: StyleConfig.sizes.size_15,
    },
    lable: {
        fontSize: StyleConfig.fonts.font_30,
        textAlign: 'center',
        backgroundColor: StyleConfig.colors.transparent,
    },
});