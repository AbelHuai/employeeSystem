/**
 * Created by yangliu on 17/2/6.
 * 带默认图片显示的图片控件
 */

import React, {PureComponent, PropTypes} from 'react'
import {Image, Animated, View, StyleSheet} from 'react-native'

let i = 0
//noinspection JSAnnotator
const genKey = (): string => {
    return `key:${++i}`
}

export default class ProgressiveImage extends PureComponent {

    static propTypes = {
        source: PropTypes.string,
        thumbnail: PropTypes.string,
        thumbnailOpacity: PropTypes.number,
        style: View.propTypes.style,
    }

    static defaultProps = {
        thumbnailOpacity: 0,
    }

    constructor(props) {
        super(props);
        this.state = {
            thumbnailOpacity: new Animated.Value(1),
            key: genKey(),
        }
    }

    onLoad = ()=> {
        console.log('onLoad called:', this.props.thumbnailOpacity);
        const {thumbnailOpacity} = this.props;
        if (1 === thumbnailOpacity) {
            return;
        }

        Animated.timing(this.state.thumbnailOpacity, {
            toValue: thumbnailOpacity,
            duration: 100,
        }).start();
    }

    onThumbnailLoad = ()=> {
        console.log('onThumbnailLoad called');
        // Animated.timing(this.state.thumbnailOpacity, {
        //     toValue: 1,
        //     duration: 50
        // }).start();
    }

    render() {
        const {style, source, thumbnail} = this.props;

        return (
            <View
                style={styles.container}>
                <Animated.Image
                    resizeMode={'contain'}
                    style={[
                        styles.imageOrigin,
                        style,
                    ]}
                    source={source}
                    onLoad={this.onLoad}/>
                <Animated.Image
                    resizeMode={'contain'}
                    style={[
                        {
                            opacity: this.state.thumbnailOpacity
                        },
                        style
                    ]}
                    source={thumbnail}
                    onLoad={this.onThumbnailLoad}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    imageOrigin: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
});