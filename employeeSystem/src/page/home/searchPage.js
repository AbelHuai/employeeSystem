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

        console.warn(`error`)
        let promise =  this.loadImageAsync(require('../../resource/image/ic_nav_h_def.png'))

        promise.then = (value) => {
            console.warn(`value = ${value}`)
        }, (error) => {
            console.warn(`error = ${error}`)
        }
    }

    loadImageAsync = (url) => {
        return new Promise(function(resolve, reject) {
            var image = new Image();

            image.onload = function() {
                console.warn(`onload`)
                resolve(image);
            };

            image.onLoadEnd = () => {
                console.warn(`onLoadEnd`)
                resolve('成功');
            }

            image.onerror = function() {
                console.warn(`onerror`)
                reject(new error('Could not load image at ' + url));
            };

            image.source = url;
            console.warn(`loadImageAsync image.source = ${image.source}`)
        });
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