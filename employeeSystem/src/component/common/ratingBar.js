/**
 * Created by otto on 2017/5/10.
 */

import React, {PropTypes} from 'react'
import {} from 'react-native'
import {observer} from 'mobx-react/native'
import {observable, action} from 'mobx'
import StarRating from 'react-native-star-rating'

import BaseComponent from '../baseComponent'

@observer
export default class RatingBar extends BaseComponent {

    static propTyps = {
        maxStars: PropTypes.number,
        starColor: PropTypes.string,
        disabled: PropTypes.bool,
        rating: PropTypes.number,
        starSize: PropTypes.number,
        spaceBetween: PropTypes.number,
        selectedStar: PropTypes.func.isRequired,
    }

    static defaultProps = {
        maxStars: 5,
        starColor: '#f8c207',
        disabled: false,
        rating: 0,
        starSize: 20,
        spaceBetween: 5,

    }

    @observable
    starCount = 0

    constructor(props) {
        super(props)
        this.updateStarCount(this.props.rating)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.rating !== undefined) {
            this.updateStarCount(nextProps.rating)
        }
    }

    updateStarCount = action((rating) => {
        this.starCount = rating
    })

    render() {
        const {maxStars, starColor, disabled, starSize, spaceBetween, selectedStar} = this.props
        return (
            <StarRating
                disabled={disabled}
                maxStars={maxStars}
                rating={this.starCount}
                selectedStar={(rating) => {
                    selectedStar(rating)
                    this.updateStarCount(rating)
                }}
                starColor={starColor}
                starSize={starSize}
                buttonStyle={{paddingRight: spaceBetween}}
            />
        )
    }

}