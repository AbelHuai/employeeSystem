/**
 * 筛选标签dialog
 * Created by Abel on 2017/6/28.
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
import HighlightSelectedLabel from  '../label/highlightSelectedLabel'

@observer
export default class ScreenLabelDialog extends BaseComponent {
    @observable visible = false

    @observable
    data = []

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

    render() {
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
                                <TextAlignVertical style={styles.title} text='标签筛选'/>
                                {
                                    this.data.length > 0 ?
                                        <View style={styles.middleView}>
                                            {
                                                this.data.map((e, index)=><HighlightSelectedLabel data={e}
                                                                                 onPress={()=>{
                                                                                    console.warn(`index=${index}`)
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
        paddingTop: StyleConfig.sizes.size_30,
        paddingBottom: StyleConfig.sizes.size_30,
    },
    title: {
        backgroundColor: StyleConfig.colors.transparent,
        fontSize: StyleConfig.fonts.font_34,
        color: StyleConfig.colors.black,
    },
    middleView: {
        backgroundColor: StyleConfig.colors.transparent,
        marginTop: StyleConfig.sizes.size_10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
