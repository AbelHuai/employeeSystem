/**
 * Created by yf on 2017/2/9.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';
import StyleConfig from '../../style/styles';
import px2dp from '../../utils/px2dp';

class YfTabBar extends Component {
    constructor(props) {
        super(props);

        this.renderTab = this.renderTab.bind(this);
    }

    static defaultProps = {
        activeTextColor: StyleConfig.colors.color_primary,
        inactiveTextColor: StyleConfig.colors.gray_all_6,
        backgroundColor: null,
        showCursor:true,
    };

    static propTypes = {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        backgroundColor: React.PropTypes.string,
        activeTextColor: React.PropTypes.string,
        inactiveTextColor: React.PropTypes.string,
        textStyle: Text.propTypes.style,
        tabStyle: View.propTypes.style,
        renderTab: React.PropTypes.func,
        showCursor: React.PropTypes.bool,
        underlineStyle: View.propTypes.style,
    };

    renderTabOption(name, page) {
    }

    renderTab(name, page, isTabActive, onPressHandler) {
        console.log('===', this.props.activeTextColor);
        const {activeTextColor, inactiveTextColor, textStyle} = this.props;
        const textColor = isTabActive ? activeTextColor : inactiveTextColor;
        // const fontWeight = isTabActive ? 'bold' : 'normal';

        return <TouchableWithoutFeedback
            style={{flex: 1,}}
            key={name}
            accessible={true}
            accessibilityLabel={name}
            accessibilityTraits='button'
            onPress={() => onPressHandler(page)}
        >
            <View style={[styles.tab, this.props.tabStyle,]}>
                <Text style={[{color: textColor,}, textStyle,]}>
                    {name}
                </Text>
            </View>
        </TouchableWithoutFeedback>;
    }

    render() {
        const containerWidth = this.props.containerWidth;
        const numberOfTabs = this.props.tabs.length;
        const tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: px2dp(6),
            backgroundColor: StyleConfig.colors.color_primary,
            bottom: 0,
        };
        const {showCursor=true} = this.props;

        const left = this.props.scrollValue.interpolate({
            inputRange: [0, 1,], outputRange: [0, containerWidth / numberOfTabs,],
        });
        return (
            <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor,}, this.props.style,]}>
                {this.props.tabs.map((name, page) => {
                    const isTabActive = this.props.activeTab === page;
                    const renderTab = this.props.renderTab || this.renderTab;
                    return renderTab(name, page, isTabActive, this.props.goToPage);
                })}
                {
                    showCursor ?
                        <Animated.View style={[tabUnderlineStyle, {left,}, this.props.underlineStyle,]}/> : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabs: {
        height: px2dp(80),
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#ccc',
    },
});
export default YfTabBar;