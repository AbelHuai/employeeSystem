/**
 * Created by Abel on 2017/6/14.
 */
import React, {PropTypes} from 'react'
import {Linking} from 'react-native'
import * as Constant from '../constant/constant'
import Toast from '@remobile/react-native-toast'

const linkingURLProps = {
    url: PropTypes.string,
}
const LinkingURL = (url) => {
    try {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                return Linking.openURL(url)
            } else {
                Toast.show('打开失败!')
                console.log('can not open url:', url)
            }
        })
    } catch (e) {
    }
}

LinkingURL.prototype = linkingURLProps
export default LinkingURL