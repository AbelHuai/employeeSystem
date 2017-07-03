/**
 * Created by Abel on 2017/5/17.
 */
import React, {Component} from 'react';
import {
    Text,
    View,
    BackAndroid,
    ToastAndroid,
    StyleSheet,
    Platform,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';
import {observer} from 'mobx-react'
import BasePage from "../basePage";
import {StyleConfig, ComponentStyle} from '../../style/styles';

@observer
export default class SearchPage extends BasePage {

    constructor(props) {
        super(props);
    }

    getTitle() {
        return '搜索'
    }

    loadData() {
        this.pageStore.onSuccess()
    }

    renderContent() {
        return (
            <View style={styles.container}>

            </View>
        );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
});