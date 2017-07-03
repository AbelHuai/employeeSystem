/**
 * Created by Abel on 2017/6/26.
 */
import React, {} from 'react'
import {ListView} from 'react-native'

import {observable, action, computed} from 'mobx'
import BaseStore from '../baseStore'
import APIService from '../../service/APIService'
import * as Constants from  '../../constant/constant'

export default class ClassificationStore extends BaseStore {

    pageNo = 1
    totalCount = 0

    @observable
    hasMore

    @observable
    data = []

    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    constructor() {
        super()
    }


    loadData = () => {
        this.fetchData(true)
    }

    loadMore = () => {
        this.pageNo++
        this.fetchData(false)
    }


    fetchData = (refresh) => {
        let d = ['Q','W','E','R','A','B','C','A','B','C']
        if (refresh) {
            this.pageNo = 1
        } else  {
            d = ['A','B','C','A','B','C','A','B','C','A']
        }
        this.hasMore = d.length === Constants.PAGE_SIZE
        this.updateData(refresh, d)
        this.onSuccess()
    }

    @action
    updateData = (isRefresh, listData) => {
        if (isRefresh) {
            this.data.clear()
            this.data.push(...listData)
        } else {
            this.data.push(...listData)
        }
    }


    @computed
    get getDataSource() {
        return this.ds.cloneWithRows(this.data.slice())
    }
}