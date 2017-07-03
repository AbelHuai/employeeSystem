/**
 * Created by Abel on 2017/5/16.
 */
import React, {Component} from 'react';
import {ScrollView, View, Text, TextInput, Image, FlatList, StyleSheet} from 'react-native';
import {observer} from 'mobx-react'
import BasePage from "../basePage"
import StyleConfig from  '../../style/styles'
import TitleBar from '../../component/common/titleBar'
import LineH from '../../component/common/lineH'
import CommonFlatList from  '../../component/common/commonFlatList'
import ClassificationItem from  '../../component/classification/classificationItem'
import MineStore from '../../store/mine/mineStore'

@observer
export default class Mine extends BasePage {

    initPageStore() {
        this.pageStore = new MineStore()
    }

    constructor(props) {
        super(props)
    }

    renderTitle() {
        return (
            <TitleBar
                showBack={false}
                title='我'/>
        )
    }

    _getItemLayout(data: any, index: number): {length: number, offset: number, index: number} {
        const length = data.length + 2 * (CARD_MARGIN + BORDER_WIDTH);
        return {length, offset: length * index, index};
    }

    _onViewableItemsChanged = (info: {
        changed: Array<{
            key: string,
            isViewable: boolean,
            item: any,
            index: ?number,
            section?: any,
        }>
    }) => {
        // Impressions can be logged here
        if (this.pageStore.logViewable) {
            infoLog(
                'onViewableItemsChanged: ',
                info.changed.map((v) => ({...v, item: '...'})),
            );
        }
    }
//
    renderContent() {
        return (
            <View style={styles.container}>
                <CommonFlatList
                    ItemSeparatorComponent={SeparatorComponent}
                    ListHeaderComponent={HeaderComponent}
                    data={this.pageStore.getDataSource}
                    key={(this.pageStore.horizontal ? 'h' : 'v') + (this.pageStore.fixedHeight ? 'f' : 'd')}
                    numColumns={this.pageStore.numColumns}
                    refreshing={false}
                    onRefresh={this.pageStore.loadData}
                    isShowLoadingMore={this.pageStore.hasMore}
                    onLoadMore={this.pageStore.loadMore}
                    renderItem={this.renderRow}
                    fixedHeight={this.pageStore.fixedHeight}
                />
            </View>
        );
    }

    renderRow = ({item}) => {
        return <ClassificationItem
            classificationInfo={item}
            onClick={()=> {
                console.warn('classification')
            }}
        />
    }
}
class HeaderComponent extends React.PureComponent {
    render() {
        return <View style={{height:44, width: StyleConfig.screen.width, backgroundColor:'red',}}>

        </View>;
    }
}

class SeparatorComponent extends React.PureComponent {
    render() {
        return <LineH/>;
    }
}

const CARD_MARGIN = 4;
const BORDER_WIDTH = 1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.colors.gray_f235,
    },
    list: {},
})
