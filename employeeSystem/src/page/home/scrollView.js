/**
 * Created by fy on 2017/5/15.
 */

import React, {Component} from 'react';
import {ScrollView, Text, Image, Dimensions, TouchableHighlight, state} from 'react-native';

import  App from  './notNetWork'
import NavigatorIOSApp from  './navigation'


export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {

    //构造体
    constructor(props){
        super(props);
        this.state = {
          title: '',
        };
    }
    //点击事件
    _onPressButton =()=> {
        console.log("qoiwhqwiud");
        this.setState({
            title: 'yang',
        });
    }
    render() {
        return (
            <ScrollView>
                <App/>
                <Text style={{fontSize: 15}}>Scroll me plz</Text>
                <Image source={require('../../Image/myPic.png')}
                       style={{width: screenWidth, height: screenHeight}}/>
                <Image style={{width: 100, height: 100}} source={require('../../Image/myPic.png')}/>
                <Text style={{fontSize: 20}}>React Native</Text>
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                       style={{height: 400}} />
                <Text style={{height: 50}}>https</Text>
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png',cache: 'force-cache'}}
                       style={{height: 200}} />
                <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{height: 100}}>
                    <Text>Inside</Text>
                </Image>
                <Text>{this.state.title}</Text>

                <TouchableHighlight onPress={this._onPressButton}>
                    <Text>Button</Text>
                </TouchableHighlight>
            </ScrollView>
        );
    }
}