/**
 * Created by Abel on 2017/5/17.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react'
import BasePage from '../basePage'
import AppStore from  '../../store/appStore'

@observer
export default class LoginPage extends BasePage {

    initPageStore() {
        this.pageStore = AppStore.userStore
    }

    getTitle () {
        return '登录'
    }

    loadData() {
        this.pageStore.onSuccess()
    }

     *foo (){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        return 6;
    }



    renderContent() {
        // console.log(`this.foo().next() = ${JSON.stringify(this.foo().next())}`);
        //
        // for (let v of this.foo()) {
        //     console.warn(v);
        // }
        return (
            <View style={{height: 64}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
            </View>
        );
    }
}
