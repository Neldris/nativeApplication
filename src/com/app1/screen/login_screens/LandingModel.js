/*use strict*/
import React, { Component } from 'react';
import GenericLoginModel from '../../util/GenericLoginModel';
import AsyncApp1Storage  from '../../storage/AsyncApp1Storage';
import {AsyncStorage} from 'react-native';

import {
         ActivityIndicator,
       } from 'react-native';


export default class LandingModel extends Component<{}> {

    constructor(props){
        super(props);
    }

    /**
     * The Basic Control Structure that serve as a dispatch to a screen
     * Basicaly, We check to see if User object is set,
     * Check for pincode then react accordingly
     * */
    componentWillMount(){
        this.initCheck();
    }
    componentDidMount(){

    }

    /**
     *  authLogin
     * @param username
     * @param password
     */
    authLogin(username,password){

    }

    /**
     * Void initChech to initialise
     * Logins
     */
    initCheck(){
        try {
               const getNavParams = this.props.navigation.state.params;
               let pst = AsyncApp1Storage.get('USER');
               console.log('User >><<'+pst);

               //console.log(getNavParams.username+'User ');

                /**Check for getNavParams integrity
                */
               if (getNavParams == null || getNavParams === 'undefined' ) {
                   this.props.navigation.navigate('LoginModel');
               }else{

                   console.log('User 1'+getNavParams.username);
                   this.props.navigation.navigate('PinCodeModel');
               }

        }catch (error){
            console.log('Error');
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
