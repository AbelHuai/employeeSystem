import React, {Component, PropTypes} from 'react';
import {
    View,
    ListView,
    Text,
    StyleSheet,
} from 'react-native';

import StyleConfig from '../../style/styles';
import px2dp from "../../utils/px2dp";

export default class CommonListView extends Component {

    static propTypes = {
        style: PropTypes.number,
        /** 是否显示'加载更多'*/
        isShowLoadingMore: PropTypes.bool,
        onLoadMore: PropTypes.func,
    };

    static defaultProps = {
        isShowLoadingMore: false,
        onLoadMore: () => {
        },
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {style, onLoadMore} = this.props
        return (
            <ListView
                ref={'list'}
                style={[styles.listView, style]}
                showsVerticalScrollIndicator={false}
                bounces={true}
                renderSeparator={this.renderSeparator}
                renderFooter={this.renderFooter}
                onEndReached={this.props.isShowLoadingMore ? onLoadMore : null}
                onEndReachedThreshold={3}
                {...this.props}
            />
        )
    }

    renderSeparator = (sectionID, rowID) => {
        return (
            <View
                style={styles.separator}
                key={rowID}
            />
        );
    }

    renderFooter = () => {
        return (
            this.props.isShowLoadingMore &&
            <Text style={styles.footerText}>
                正在加载中...
            </Text>
        );
    }

    /**
     * 返回listview顶部
     */
    goTop = () => {
        this.refs.list && this.refs.list.scrollTo({x: 0, y: 0, animated: true});
    }
}

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
        color: StyleConfig.colors.gray_eeeef0,
        fontSize: StyleConfig.fonts.font_24,
        paddingTop: px2dp(20),
        paddingBottom: px2dp(20),
    },
});
