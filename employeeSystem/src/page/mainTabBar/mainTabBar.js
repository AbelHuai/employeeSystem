/**
 * Created by Abel on 2017/5/16.
 */
import React, {Component} from 'react';
import {Text, StyleSheet, Image, NavigatorIOS, Platform} from 'react-native';

import * as Constants from '../../constant/constant'
import BaseComponent from '../../component/baseComponent';
import px2db from  '../../utils/px2dp'
import TabNavigator from 'react-native-tab-navigator';
import {observable} from 'mobx';
import {observer} from 'mobx-react/native';
import AppStore from  '../../store/appStore'

import Home from '../home/home';
import Classification from  '../classification/classification';
import Cart from  '../cart/cart';
import Mine from  '../mine/mine';


@observer
export default class MainTabBar extends BaseComponent {

    @observable
    selectedTab = Constants.TABS[0]

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TabNavigator tabBarStyle={styles.tabBar}>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={Constants.TABS[0]}
                    selected={this.selectedTab === Constants.TABS[0]}
                    selectedTitleStyle={{color: '#00c599'}}
                    renderIcon={() => <Image style={styles.tab} source={require('../../resource/image/ic_nav_h_def.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tab}
                                                     source={require('../../resource/image/ic_nav_h_cur.png')}/>}
                    onPress={()=> {
                        this.onTabSelected(Constants.TABS[0])
                    }}>
                    {<Home/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={Constants.TABS[1]}
                    selected={this.selectedTab === Constants.TABS[1]}
                    selectedTitleStyle={{color: '#00c599'}}
                    renderIcon={() => <Image style={styles.tab} source={require('../../resource/image/ic_nav_f_def.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tab}
                                                     source={require('../../resource/image/ic_nav_f_cur.png')}/>}
                    onPress={()=> {
                        this.onTabSelected(Constants.TABS[1])
                    }}>
                    {<Classification/>}

                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={Constants.TABS[2]}
                    selected={this.selectedTab === Constants.TABS[2]}
                    selectedTitleStyle={{color: '#00c599'}}
                    renderIcon={() => <Image style={styles.tab} source={require('../../resource/image/ic_nav_c_def.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tab}
                                                     source={require('../../resource/image/ic_nav_c_cur.png')}/>}
                    onPress={()=> {
                        this.onTabSelected(Constants.TABS[2])
                    }}>
                    {<Cart/>}
                </TabNavigator.Item>
                <TabNavigator.Item
                    tabStyle={styles.tabStyle}
                    title={Constants.TABS[3]}
                    selected={this.selectedTab === Constants.TABS[3]}
                    selectedTitleStyle={{color: '#00c599'}}
                    renderIcon={() => <Image style={styles.tab} source={require('../../resource/image/ic_nav_m_def.png')}/>}
                    renderSelectedIcon={() => <Image style={styles.tab}
                                                     source={require('../../resource/image/ic_nav_m_cur.png')}/>}
                    onPress={()=> {
                        this.onTabSelected(Constants.TABS[3])
                    }}>
                    {<Mine/>}
                </TabNavigator.Item>
            </TabNavigator>
        );
    }

    onTabSelected = (selectedTab)=> {
        // console.warn(`on tab click:${selectedTab}`)
        switch (selectedTab) {
            case Constants.TABS[2]:
            case Constants.TABS[3]: {
                // if (!AppStore.userStore.isLogin) {
                //     PageRoute.loginPage();
                //     return;
                // }
            }
                break;
        }
        this.selectedTab = selectedTab;
    }
}


const styles = StyleSheet.create({
    tabbar: {
        height: px2db(110),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    tabStyle: {
        padding: px2db(8)
    },
    tab: {
        width: px2db(50),
        height: px2db(50)
    },
    selectedTitle: {
        color: 'red',
        fontSize: px2db(20),
        textAlign: 'center',
    },
    navBar: {
        height: (Platform.OS === 'ios') ? 64 : 44
    },
});

