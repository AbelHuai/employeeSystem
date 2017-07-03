/**
 * Created by otto on 2017/5/11.
 */
import BasePageEx from './basePage'

export default class basePageWithoutLoadingState extends BasePageEx {

    initPageStore() {
        super.initPageStore()
        this.pageStore.onSuccess()
    }
}