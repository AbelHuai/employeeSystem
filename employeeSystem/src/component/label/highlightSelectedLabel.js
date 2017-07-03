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


export default class HighlightSelectedLabel extends PureComponent {

    static propTypes = {
        selectBackgroundColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        selectBorderColor: PropTypes.string,
        borderColor: PropTypes.string,
        selectTextColor: PropTypes.string,
        textColor: PropTypes.string,
        onPress: PropTypes.func,
    };

    static defaultProps = {
        selectBackgroundColor: StyleConfig.colors.color_primary,
        backgroundColor: StyleConfig.colors.white,
        selectBorderColor: StyleConfig.colors.transparent,
        borderColor: StyleConfig.colors.color_font_main,
        selectTextColor: StyleConfig.colors.white,
        textColor: StyleConfig.colors.color_font_main,
        onPress: () => {
        },
    };


    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        }
    }

    updateSelectedState = (index) => {
        if (index == -1) {
            this.setState({
                isSelected: false,
            });
            return
        }
        this.setState({
            isSelected: true,
        });

    }

    render() {
        const {
            data,
            onPress,
            backgroundColor,
            selectBackgroundColor,
            textColor,
            selectTextColor,
            borderColor,
            selectBorderColor,
        } = this.props
        return (
            <TouchableWithoutFeedback onPress={onPress}
                                      onPressIn={()=>{this.updateSelectedState(1)}}
                                      onPressOut={()=>{this.updateSelectedState(-1)}}>
                <View style={[
                          styles.lableView,
                          {
                              backgroundColor: this.state.isSelected ?  selectBackgroundColor: backgroundColor,
                              borderColor: this.state.isSelected  ? selectBorderColor : borderColor
                          }]}>
                    <Text
                        style={[styles.lable,
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
        width: (StyleConfig.screen.width - StyleConfig.sizes.size_150) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleConfig.sizes.size_1,
        borderRadius: StyleConfig.sizes.size_30,
    },
    lable: {
        fontSize: StyleConfig.fonts.font_30,
        textAlign: 'center',
    },
});
