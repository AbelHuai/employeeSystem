/**
 * 通用标题栏
 * Created by kimOtto on 2017/4/10.
 */
import React, {PropTypes} from 'react'
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native'

import px2dp from '../../utils/px2dp'
import GlobalStyle from '../../style/styles'
import TextAlignVertical from './textAlignVertical'
import PageRoute from '../../page/pageRouter'

import LineH from './lineH'

const TitleBarProps = {
    title: PropTypes.string.isRequired,
    backLabel: PropTypes.node,
    backFunc: PropTypes.func,
    backIcon: PropTypes.object,
    showBack: PropTypes.bool,
    optionLabel: PropTypes.node,
    optionFunc: PropTypes.func,
    primaryStyle: PropTypes.bool,
}

const TitleBar = ({
                      title, backLabel, backIcon, backFunc /*= () => PageRoute.pop()*/, showBack = true,
                      optionLabel, optionFunc, primaryStyle = true,
                  }) => {

    return (
        <View
            style={[styles.root, {backgroundColor: primaryStyle ? GlobalStyle.colors.color_primary : GlobalStyle.colors.white}]}>

            <View style={styles.titleBlock}>
                <TextAlignVertical text={title}
                                   style={[styles.title, {color: primaryStyle ? GlobalStyle.colors.white : GlobalStyle.colors.color_font_main}]}/>
            </View>
            {
                showBack ?
                    <TouchableOpacity onPress={backFunc} style={styles.backBlock}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {
                                backIcon ? backIcon : (
                                    primaryStyle ?
                                        <Image
                                            resizeMode={Image.resizeMode.center}
                                            style={styles.backImg}
                                            source={require('../../resource/image/icon_back_white.png')}/>
                                        :
                                        <Image
                                            resizeMode={Image.resizeMode.center}
                                            style={styles.backImg}
                                            source={require('../../resource/image/icon_back_black.png')}/>
                                )
                            }
                            {backLabel}
                        </View>
                    </TouchableOpacity>
                    : null
            }

            <TouchableOpacity onPress={optionFunc} style={styles.optionBlock}>
                <View>
                    {optionLabel}
                    {/*{
                     (!optionLabel && optionFunc) ? (optionIcon ? optionIcon : (optionImg ?
                     <Image source={optionImg}/> :
                     <Image source={require('../../resource/image/icon_sys_scan.png')}/>)) : null
                     }*/}
                </View>
            </TouchableOpacity>

            <LineH style={styles.bottomLine}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        width: GlobalStyle.screen.width,
        height: GlobalStyle.sizes.nav_bar_height + GlobalStyle.sizes.status_bar_height,
        paddingTop: GlobalStyle.sizes.status_bar_height,
    },
    titleBlock: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backBlock: {
        height: GlobalStyle.sizes.nav_bar_height + GlobalStyle.sizes.status_bar_height,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        paddingTop: GlobalStyle.sizes.status_bar_height,
    },
    backImg: {
        height: GlobalStyle.sizes.nav_bar_height,
        paddingRight: GlobalStyle.sizes.size_30,
        paddingLeft: GlobalStyle.sizes.size_40,
    },
    optionBlock: {
        height: GlobalStyle.sizes.nav_bar_height + GlobalStyle.sizes.status_bar_height,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'absolute',
        right: 0,
        top: 0,
        paddingTop: GlobalStyle.sizes.status_bar_height,
        paddingLeft: GlobalStyle.sizes.size_15,
    },
    title: {
        fontSize: GlobalStyle.fonts.font_34,
        height: GlobalStyle.sizes.nav_bar_height,
    },
    bottomLine: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: GlobalStyle.colors.color_line,
    },
})

TitleBar.prototype = TitleBarProps
export default TitleBar