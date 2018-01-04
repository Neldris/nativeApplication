/*use strict*/
import React, { Component } from 'react';
import styles from '../../../../resources/style/App1StyleSheet';
import GenericLoginModel from '../util/GenericLoginModel';

import {
         ActivityIndicator,
       } from 'react-native';

const landingImage = require('../../../../resources/static/imgs/landing.png');
export default class LandingModel extends Component<{}> {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        if(true) {
             this.props.navigation.navigate('LoginModel','https:google.com');
        }
    }

    render() {

        return (
                <GenericLoginModel
                    model = {<ActivityIndicator size="large" color="#f45"/>}
                />
        );
    }
}
