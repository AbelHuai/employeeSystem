/**
 * Created by Abel on 2017/6/28.
 */
import React, {Component, PropTypes} from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
} from 'react-native';

import StyleConfig from '../../style/styles';
import px2dp from "../../utils/px2dp";

export default class CommonFlatList extends Component {

    static propTypes = {
        style: PropTypes.number,
        /** 是否显示'加载更多'*/
        isShowLoadingMore: PropTypes.bool,
        fixedHeight: PropTypes.bool,
        virtualized: PropTypes.bool,
        horizontal: PropTypes.bool,
        logViewable: PropTypes.bool,
        onLoadMore: PropTypes.func,
    };

    static defaultProps = {
        isShowLoadingMore: false,
        fixedHeight: false,
        virtualized: true,
        horizontal: false,
        logViewable: false,
        onLoadMore: () => {
        },
    };

    constructor(props) {
        super(props);
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
        if (this.props.logViewable) {
            infoLog(
                'onViewableItemsChanged: ',
                info.changed.map((v) => ({...v, item: '...'})),
            );
        }
    }

    render() {
        const {style, horizontal, virtualized, fixedHeight, onLoadMore} = this.props
        return (
            <FlatList
                style={[styles.listView, style]}
                ref={'FlatList'}
                ListFooterComponent= {this.props.isShowLoadingMore ? FooterComponent : undefined}
                getItemLayout={fixedHeight ? this._getItemLayout : undefined}
                onEndReached={this.props.isShowLoadingMore ? onLoadMore : null}
                bounces={true}
                onViewableItemsChanged={this._onViewableItemsChanged}
                legacyImplementation={false}
                onEndReachedThreshold={0.01}
                horizontal={horizontal}
                disableVirtualization={virtualized}
                {...this.props}
            />

        )
    }

    /**
     * 返回listview顶部
     */
    goTop = () => {
        this.refs.list && this.refs.list.scrollTo({x: 0, y: 0, animated: true});
    }
}
class HeaderComponent extends React.PureComponent {
    render() {
        return <View style={{height:44, width: StyleConfig.screen.width, backgroundColor:'red',}}>

        </View>;
    }
}
class FooterComponent extends React.PureComponent {
    render() {
        return <Text style={styles.footerText}>正在加载更多...</Text>
    }
}

const CARD_MARGIN = 4;
const BORDER_WIDTH = 1;

const styles = StyleSheet.create({
    listView: {
        flex: 1,
    },
    separator: {
        flex: 1,
        height: px2dp(1),
        backgroundColor: StyleConfig.colors.gray_all_d,
    },
    row: {
        width: px2dp(216),
        height: px2dp(88),
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: StyleConfig.fonts.font_24,
    },
    footerText: {
        textAlign: 'center',
        // color: StyleConfig.colors.gray_eeeef0,
        fontSize: StyleConfig.fonts.font_24,
        paddingTop: px2dp(20),
        paddingBottom: px2dp(20),
    },
});
