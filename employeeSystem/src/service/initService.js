/**
 * Created by otto on 2017/4/18.
 */

import BaseService from './baseService'
import * as RNFetch from '../net/rnFetch'

export default class InitService extends BaseService {

    async initBase() {
        try {
            let fetchTestResult = await RNFetch.get('https://facebook.github.io/react-native/movies.json')
            if (fetchTestResult) {
                console.warn('fetch from facebook success:', fetchTestResult)
            } else {
                console.warn('fetch from facebook error:', fetchTestResult)
            }
        } catch (e) {
            console.warn('init base exception:', e)
        }
    }

    initConfig() {

    }

}