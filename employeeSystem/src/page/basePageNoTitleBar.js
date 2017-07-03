/**
 *
 * 无标题栏的页面
 *
 * Created by otto on 2017/5/9.
 */

import BasePage from './basePage'

export default class BasePageNoTitleBar extends BasePage {

    renderTitle() {
        return null
    }
}