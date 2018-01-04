/*use strict*/
import React, { Component } from 'react';
import styles from '../../../../resources/style/App1StyleSheet';
import GenericLoginModel from '../util/GenericLoginModel';
import {
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';


export default class LoginModel extends Component<{}> {

    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:'',
            pinCode:'',
        }
    }

    render() {
        return (
            <GenericLoginModel
              model={
                  <View style={styles.log_m_container}>
                      <TextInput
                          underlineColorAndroid={'transparent'}
                          style={styles.log_m_username}
                          placeholder={'username'}
                      />
                      <TextInput
                          underlineColorAndroid={'transparent'}
                          style={styles.log_m_password}
                          placeholder={'password'}
                      />

                      <TouchableOpacity style= {styles.log_m_btn}>
                          <Text style={styles.log_m_btn_text}> Login</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.log_m_reset_con}>
                          <Text style={styles.log_m_reset_text}>Reset password</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.log_m_reg_con}>
                          <Text>Register a new account</Text>
                      </TouchableOpacity>
                  </View>
              }
            />
        );
    }
}
