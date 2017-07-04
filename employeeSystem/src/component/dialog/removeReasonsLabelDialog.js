/**
 * 去除的原因文章标签dialog
 * Created by Abel on 2017/6/30.
 */
import React, {PureComponent, Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Modal,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import {observer} from 'mobx-react/native';
import {observable, action, reaction} from 'mobx';
import BaseComponent from "../baseComponent";
import StyleConfig from "../../style/styles";
import TextAlignVertical from '../common/textAlignVertical'
import CheckHighlightLabel from  '../label/checkHighlightLabel'

@observer
export default class RemoveReasonsLabelDialog extends BaseComponent {
    @observable visible = false
    @observable isSelectData = false

    @observable
    data = []

    labeldata = []
    lastSelectedIndex = -1

    constructor(props) {
        super(props);
    }

    @action
    setVisibility = (visible) => {
        this.visible = visible;
    };

    onRequestClose = () => {
        this.setVisibility(false)
    }
    //单选
    updateSingleSelectState = (e, index) => {
        let ref = this.labeldata[index]
        ref.setState({
            isSelected: !ref.state.isSelected,
        })
        e.selected = !e.selected
        if (this.lastSelectedIndex == -1 || this.lastSelectedIndex == index) {
            this.lastSelectedIndex = index
        } else {
            let lastrRef = this.labeldata[this.lastSelectedIndex]
            lastrRef.setState({
                isSelected: false,
            })
            let lastData = this.data[this.lastSelectedIndex]
            lastData.selected = false
            this.lastSelectedIndex = index
        }
        this.setIsSelectData(this.data)
    }
    //多选
    updateMultiSelecttState = (e, isSelected) => {
        e.selected = isSelected
    }
    //是否有选择标签，更改确定按钮状态
    @action
    setIsSelectData = (data) => {
        let flag = false
        for (let i = 0; i < data.length; i++) {
            let e = data[i]
            if (e.selected) {
                flag = true
                break
            }
        }
        if (this.isSelectData === flag) return
        this.isSelectData = flag
    }

    render() {
        const {onPress} = this.props
        return (
            <Modal
                transparent={true}
                visible={this.visible}
                onShow={() => {
                }}
                onRequestClose={this.onRequestClose}>
                <TouchableWithoutFeedback onPress={this.onRequestClose}>
                    <View style={styles.container}>
                        <TouchableWithoutFeedback>
                            <View style={styles.view}>
                                <View style={styles.headerView}>
                                    <TextAlignVertical style={styles.title} text='选择原因，减少类似推送'/>
                                    <TouchableOpacity style={styles.button}
                                                      onPress={ () =>{
                                                          this.onRequestClose()
                                                          onPress(this.data[this.lastSelectedIndex])
                                                      }}
                                                      disabled={!this.isSelectData}>
                                        <View style={
                                            [styles.button,
                                            this.isSelectData
                                            ?
                                            {backgroundColor: StyleConfig.colors.color_primary}
                                            :
                                            {backgroundColor: StyleConfig.colors.color_global_bg}]
                                        }>
                                            <TextAlignVertical style={
                                                [styles.buttonTitle,
                                                this.isSelectData
                                            ?
                                            {color: StyleConfig.colors.white}
                                            :
                                            {color: StyleConfig.colors.color_font_third}]
                                            } text='确定'/>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {
                                    this.data.length > 0 ?
                                        <View style={styles.middleView}>
                                            {
                                                this.data.map((e, index)=><CheckHighlightLabel data={e}
                                                                                               ref={(ref) => {this.labeldata.push(ref)}}
                                                                                               multiSelect={false}
                                                                                               onPress={(isSelected)=>{
                                                                                                   this.updateSingleSelectState(e,index)
                                                                                                   {/*this.updateMultiSelecttState(e,isSelected)*/}
                                                                                               }}
                                                                                               lableViewStyle={{
                                                                                                   height: StyleConfig.sizes.size_60,
                                                                                                   width: (StyleConfig.screen.width - StyleConfig.sizes.size_150) / 2,
                                                                                                   borderRadius: StyleConfig.sizes.size_30,
                                                                                                   }}
                                                                                               lableStyle={{

                                                                                               }}
                                                                                               backgroundColor={StyleConfig.colors.white}
                                                                                               selectBackgroundColor={StyleConfig.colors.color_primary}
                                                                                               textColor={StyleConfig.colors.color_font_main}
                                                                                               selectTextColor={StyleConfig.colors.white}/>
                                                )
                                            }
                                        </View> : null
                                }
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }

    @action
    showDialog = (value) => {
        this.visible = true;
        this.buildData(value)
    }

    @action
    buildData = (data) => {
        this.data.clear()
        this.labeldata = []
        this.lastSelectedIndex = -1
        if (data && data instanceof Array && data.length > 0) {
            data.map((e, index)=> {
                this.data.push({label: e, index: index, selected: false})
            })
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: StyleConfig.colors.color_popup,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        width: StyleConfig.screen.width - StyleConfig.sizes.size_60,
        flexDirection: 'column',
        backgroundColor: StyleConfig.colors.white,
        borderRadius: StyleConfig.sizes.size_16,
        // paddingTop: StyleConfig.sizes.size_30,
        paddingBottom: StyleConfig.sizes.size_30,
    },
    headerView: {
        width: StyleConfig.screen.width - StyleConfig.sizes.size_60,
        flexDirection: 'row',
        backgroundColor: StyleConfig.colors.white,
        borderRadius: StyleConfig.sizes.size_16,
    },
    title: {
        backgroundColor: StyleConfig.colors.transparent,
        fontSize: StyleConfig.fonts.font_28,
        color: StyleConfig.colors.color_font_third,
        textAlign: 'left',
        marginLeft: StyleConfig.sizes.size_30,
        marginTop: StyleConfig.sizes.size_40,
    },
    button: {
        width: StyleConfig.sizes.size_150,
        height: StyleConfig.sizes.size_60,
        borderRadius: StyleConfig.sizes.size_30,
        justifyContent: 'center',
        position: 'absolute',
        right: StyleConfig.sizes.size_15,
        top: StyleConfig.sizes.size_10,
    },
    buttonTitle: {
        fontSize: StyleConfig.fonts.font_28,
        textAlign: 'center',
        backgroundColor: StyleConfig.colors.transparent,
    },
    middleView: {
        backgroundColor: StyleConfig.colors.transparent,
        marginTop: StyleConfig.sizes.size_10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});