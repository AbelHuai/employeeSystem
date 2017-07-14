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
        onPress: () => {
        },
    };
    //初始化数据
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
        }
    }
    //更新单选选中状态
    updateSelectedState = () => {
        this.setState({
            isSelected: !this.state.isSelected,
        })
    }

    render() {
        const {
            data,                               //数据
            onPress,                            //按钮
            backgroundColor,                    //背景色
            selectBackgroundColor,              //选中背景色
            textColor,                          //字体色
            selectTextColor,                    //选中字体色
            borderColor,                        //边框色
            selectBorderColor,                  //选中边框色
            lableViewStyle,                     //视图样式
            lableStyle                          //字体样式
        } = this.props
        return (
            <TouchableWithoutFeedback onPress={()=> {
              this.updateSelectedState()
             onPress()
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