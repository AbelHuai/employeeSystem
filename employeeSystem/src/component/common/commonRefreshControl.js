/**
 * Created by otto on 2017/5/9.
 */

import React, {Component, PropTypes} from 'react';
import {
    RefreshControl,
} from 'react-native';

import {observer} from 'mobx-react/native'

import StyleConfig from '../../style/styles';

@observer
export default class CommonRefreshControl extends Component {

    state = {
        isRefreshing: false,
    }

    static propTypes = {
        onRefresh: PropTypes.func,
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RefreshControl
                {...this.props}
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh}
                enabled={true}
                tintColor={StyleConfig.colors.color_primary}
                title="下拉刷新..."
                titleColor={StyleConfig.colors.gray_all_9}
                colors={['#00c599']}
                progressBackgroundColor={StyleConfig.colors.white}
            />
        )
    }

    onRefresh = async () => {
        try {
            this.setState((state, props) => {
                isRefreshing: true
            });
            const {onRefresh} = this.props;
            onRefresh && await onRefresh();

        } catch (e) {

        } finally {
            this.setState((state, props) => {
                isRefreshing: false
            });
        }
    }
}