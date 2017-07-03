/**
 *
 * Created by kimOtto on 2017/4/7.
 */

import {Dimensions} from 'react-native'
import {PixelRatio} from 'react-native'
import * as Constants from '../constant/constant'

// device width/height
const deviceWidthDp = Dimensions.get('window').width;
const deviceHeightDp = Dimensions.get('window').height;

// design width/height
const uiHeightPx = 667 * 2;
const uiWidthPx = 375 * 2;

const uiWidthPxAndroid = 800;

export default function px2dp(uiSizeInPx) {
    //return uiSizeInPx / PixelRatio.get()
    //return  uiSizeInPx * deviceWidthDp / uiWidthPx;
    let deviceW = Constants.isAndroidPlatform ? uiWidthPxAndroid : uiWidthPx;
    return  uiSizeInPx * deviceWidthDp / deviceW;
}
