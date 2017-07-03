/**
 * Created by Abel on 2017/5/16.
 */
import React, {Component} from 'react'
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native'
import {observer} from 'mobx-react'
import BasePage from "../basePage"
import StyleConfig from  '../../style/styles'
import TitleBar from '../../component/common/titleBar'
import CommonListView from '../../component/common/commonListView'
import CommonRefreshControl from '../../component/common/commonRefreshControl'
import LineH from '../../component/common/lineH'
import ClassificationItem from  '../../component/classification/classificationItem'
import ClassificationStore from '../../store/classification/classificationStore'

@observer
export default class Classification extends BasePage {

    initPageStore() {
        this.pageStore = new ClassificationStore()
    }
    constructor(props) {
        super(props)
    }

    renderTitle() {
        return (
            <TitleBar
                showBack={false}
                title='分类'/>
        )
    }

    renderContent() {
        return (
            <View style={styles.container}>
                <CommonListView
                    style={styles.list}
                    refreshControl={
                        <CommonRefreshControl
                            onRefresh={this.pageStore.loadData}/>
                    }
                    dataSource={this.pageStore.getDataSource}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}
                    initialListSize={4}
                    pageSize={4}
                    isShowLoadingMore={this.pageStore.hasMore}
                    onLoadMore={this.pageStore.loadMore}
                />
            </View>
        )
    }

    renderRow = (rowData, sectionID, rowID, highlightRow) => {
        return <ClassificationItem
            key={rowID}
            classificationInfo={rowData}
            onClick= {()=> {
                console.warn('classification')
            }}
        />
    }
    renderSeparator = () => {
        return <LineH/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.colors.gray_f235,
    },
    list: {},
})