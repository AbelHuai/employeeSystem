/**
 * Created by Abel on 2017/6/27.
 */
import React, {} from 'react'
import {observable, action, computed} from 'mobx'
import BaseStore from '../baseStore'
import APIService from '../../service/APIService'
import * as Constants from  '../../constant/constant'

export default class MineStore extends BaseStore {

    pageNo = 1
    totalCount = 0

    @observable fixedHeight = true
    @observable numColumns = 1
    @observable refreshing = false
    @observable hasMore = true
    @observable data = []

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
        let d = ['Q', 'W', 'E', 'R', 'B', 'C', 'A', 'B', 'C', 'A']
        if (refresh) {
            this.pageNo = 1
        } else {
            d = ['A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C']
        }

        if (refresh) {
             this.updateData(refresh, d)
        } else {
            setTimeout(() => this.updateData(refresh, d), 3000)
        }

        this.onSuccess()
    }

    @action
    updateData = (isRefresh, listData) => {
        this.hasMore = listData.length === Constants.PAGE_SIZE
        if (isRefresh) {
            this.data.clear()
            this.data.push(...listData)
        } else {
            this.data.push(...listData)
        }
    }


    @computed
    get getDataSource() {
        return this.data.slice()
    }
}