/**
 * Created by Abel on 2017/5/17.
 */
import {Actions} from 'react-native-router-flux';

export default PageRoute = {
    main: () => {
    },
    searchPage: () => {
        Actions.searchPage();
    },
    classificationDetial: () => {
        Actions.classificationDetial();
    },
    loginPage: () => {
        Actions.loginPage();
    },
    home: ()=>{
        Actions.home();
    },
    pop: () => {
        Actions.pop();
    },
}
