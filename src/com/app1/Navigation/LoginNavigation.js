/**
 * Created by richard on 02/01/18.
 */

import {StackNavigator} from 'react-navigation';
import LandingModel from '../model/LandingModel';
import LoginModel from '../model/LoginModel';
import MainModel from '../model/MainModel';

const LoginNavigation = StackNavigator(
    {
        LandingModel: {screen : LandingModel},
        LoginModel: {screen : LoginModel},
        MainModel: {screen : MainModel},
    },
    {
        navigationOptions:{
            header: false,
        }
    }
);

export default LoginNavigation;