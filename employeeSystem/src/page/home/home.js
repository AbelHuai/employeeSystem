/**
 * Created by fy on 2017/5/15.
 */

import React, {Component} from 'react';
import {ScrollView, View, Text, Image, TouchableHighlight, StyleSheet, Platform, Dimensions} from 'react-native';
import BasePage from "../basePage";
import {observer} from 'mobx-react'
import {StyleConfig} from  '../../style/styles';
import px2dp from  '../../utils/px2dp';
import {Actions} from 'react-native-router-flux';
import HomeStore from '../../store/home/homeStore'
import TitleBar from '../../component/common/titleBar'

@observer
export default class Home extends BasePage {

    initPageStore() {
        this.pageStore = new HomeStore()
    }
    renderTitle() {
        return (
            <TitleBar
                showBack={false}
                title='首页'/>
        )
    }

    loadData() {
        this.pageStore.onSuccess()
    }


    //点击事件
    _onPressButton =()=> {
        // console.warn('onSearchClick');
        Actions.searchPage();

    }
    renderContent() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button} onPress={this._onPressButton}>
                    <Text style={styles.title}>Button</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    button: {
        height: 100,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    // 通用标题栏
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        color: '#484848',
    },
});


