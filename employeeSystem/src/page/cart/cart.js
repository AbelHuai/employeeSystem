/**
 * Created by Abel on 2017/5/16.
 */
import React, {Component} from 'react';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    Button,
    Alert,
    KeyboardAvoidingView,
    Modal,
    SegmentedControlIOS,
    StyleSheet,
    TouchableHighlight,
    Picker
} from 'react-native';
import ScreenLabelDialog from '../../component/dialog/screenLabelDialog'
import RemoveReasonsLabelDialog from '../../component/dialog/removeReasonsLabelDialog'
import CollectArticlesDialog from '../../component/dialog/collectArticlesDialog'
import ActionSheet from 'react-native-actionsheet'


const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 4
const options = ['Cancel', 'Apple', 'Banana', 'Watermelon', 'Durian']
const title = 'Which one do you like?'


export default class Cart extends Component {

    screenLabelDialog
    removeReasonsLabelDialog
    collectArticlesDialog

    onButtonScreenLabel = () => {
        this.screenLabelDialog.showDialog(['全部', '神经大条', '好看', '巨好看'])
    }
    onButtonRemoveReasonsLabel = () => {
        this.removeReasonsLabelDialog.showDialog(['全部', '神经大条', '好看', '巨好看'])
    }
    onButtonCollectArticlesDialog = () => {
        this.collectArticlesDialog.showDialog(['全部的', '神经大条的', '好看的', '巨好看啊','全部', '神经大条', '好看', '巨好看'])
    }
    onButtonActionsheet = () => {
        this.ActionSheet.show()
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: 64, backgroundColor: 'powderblue'}}/>
                <Button
                    onPress={this.onButtonScreenLabel}
                    title="ScreenLabelDialog"
                />
                <Button
                    onPress={this.onButtonRemoveReasonsLabel}
                    title="removeReasonsLabelDialog"
                />
                <Button
                    onPress={this.onButtonCollectArticlesDialog}
                    title="collectArticlesDialog"
                />
                <Button
                    onPress={this.onButtonActionsheet}
                    title="actionsheet"
                />
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={title}
                    options={options}
                    cancelButtonIndex={CANCEL_INDEX}
                    destructiveButtonIndex={DESTRUCTIVE_INDEX}
                    onPress={()=>{}}
                />
                <ScreenLabelDialog ref={(dialog) => {
                    this.screenLabelDialog = dialog
                }}/>
                <RemoveReasonsLabelDialog ref={(dialog) => {
                    this.removeReasonsLabelDialog = dialog
                }}
                                          onPress={(data) => {
                                            console.warn(`data = ${JSON.stringify(data)}`)
                                          }}/>
                <CollectArticlesDialog ref={(dialog) => {
                    this.collectArticlesDialog = dialog
                }}
                                       onPress={(data) => {
                                            console.warn(`data = ${JSON.stringify(data)}`)
                                       }}/>
            </View>
        );
    }
}