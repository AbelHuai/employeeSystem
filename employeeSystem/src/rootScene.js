/**
 * Created by Abel on 2017/5/17.
 */
import React, {Component} from 'react';

import {Scene, Reducer, Router} from 'react-native-router-flux';

import MainTabBar from './page/mainTabBar/mainTabBar';
import Home from './page/home/home';
import Classification from './page/classification/classification';
import Cart from './page/cart/cart';
import Mine from './page/mine/mine';

import LoginPage from './page/login/loginPage';
import SearchPage from './page/home/searchPage';



const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    }
};

// define this based on the styles/dimensions you use
const getSceneStyle = function (/* NavigationSceneRendererProps */ props, computedProps) {
    const style = {
        flex: 1,
    };
    return style;
};

const SCENE_KEY = {
    mainTabBar: 'mainTabBar',
    home: 'home',
    classification: 'classification',
    cart: 'cart',
    mine: 'mine',
    searchPage: 'searchPage',
    loginPage: 'loginPage',
};

export default class RootScene extends Component {

    render() {

        return (
            <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
                <Scene key="root" hideTabBar={true} hideNavBar={true}>
                    <Scene
                        key={SCENE_KEY.mainTabBar}
                        component={MainTabBar}
                        title="主页"
                        initial={true}
                    />
                    <Scene
                        key={SCENE_KEY.home}
                        component={Home}
                        title="首页"
                    />
                    <Scene
                        key={SCENE_KEY.classification}
                        component={Classification}
                        title="分类"
                    />

                    <Scene
                        key={SCENE_KEY.cart}
                        component={Cart}
                        title="购物车"
                    />
                    <Scene
                        key={SCENE_KEY.mine}
                        component={Mine}
                        title="我的"
                    />
                    <Scene
                        key={SCENE_KEY.searchPage}
                        component={SearchPage}
                        title="搜索"
                    />
                    <Scene
                        key={SCENE_KEY.loginPage}
                        component={LoginPage}
                        title="登录"
                    />
                </Scene>
            </Router>
        );
    }
}
