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

    selected = false //状态

    static propTypes = {
        selectBackgroundColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        selectBorderColor: PropTypes.string,
        borderColor: PropTypes.string,
        selectTextColor: PropTypes.string,
        textColor: PropTypes.string,
        moreSeleted: PropTypes.string,
        onPress: PropTypes.func,
    };

    static defaultProps = {
        selectBackgroundColor: StyleConfig.colors.color_primary,
        backgroundColor: StyleConfig.colors.white,
        selectBorderColor: StyleConfig.colors.transparent,
        borderColor: StyleConfig.colors.color_font_main,
        selectTextColor: StyleConfig.colors.white,
        textColor: StyleConfig.colors.color_font_main,
        moreSeleted: 'no-select',
        onPress: () => {
        },
    };


    //初始化数据
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false
        }
    }

    // //更新选中状态
    // updateSelectedState = (index) => {
    //     if (index == -1) {
    //         this.setState({
    //             isSelected: false,
    //         });
    //         return
    //     }
    //     this.setState({
    //         isSelected: true,
    //     });
    //
    // }
    //更新单选选中状态
    updateSelectedState = (index) => {
        if (index == -1) {
            this.setState({
                isSelected: false,
            });
            return
        }
        if (index == 1) {
            this.setState({
                isSelected: true,
            });
            return
        }
        if (this.selected) {
            this.setState({
                isSelected: false,
            })
            this.selected = false
        } else {
            this.setState({
                isSelected: true,
            })
            this.selected = true
        }

    }


    render() {
        const {
            data,                               //数据
            onPress,                            //按钮
            moreSeleted,                        //more-select 多选，one-select 单选 no-select 不选
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
               if(moreSeleted !== 'no-select') {
                   this.updateSelectedState(2)
               }
             onPress()
            }}
                                      onPressIn={()=>{this.updateSelectedState(1)}}
                                      onPressOut={()=>{this.updateSelectedState(-1)}}>
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
        marginRight: StyleConfig.sizes.size_30,
        height: StyleConfig.sizes.size_60,
        // width: (StyleConfig.screen.width - StyleConfig.sizes.size_150) / 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleConfig.sizes.size_1,
        borderRadius: StyleConfig.sizes.size_30,
        paddingHorizontal: StyleConfig.sizes.size_15,
    },
    lable: {
        fontSize: StyleConfig.fonts.font_30,
        textAlign: 'center',
    },
});
