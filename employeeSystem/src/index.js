/**
 * Created by Abel on 2017/6/21.
 */
import React, {Component} from 'react'

import RootScene from './rootScene'
import AppStore from './store/appStore'

if (!__DEV__) {
    const emptyFun = () => {
    }
    global.console = {
        info: emptyFun,
        log: emptyFun,
        warn: emptyFun,
        error: emptyFun(),
    }
}
export default class MedicinePedia extends Component {

    constructor(){
        super()
        AppStore.onResume()
    }

    render() {
        return <RootScene/>
    }
}