/**
 * Created by richard on 04/01/18.
 */
import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';

export default class AsyncApp1Storage{

    /**
     *  Save Method
     * @param key
     * @param data
     * @returns {Promise.<*>}
     */
    static  save(key , data){
        console.log('save '+data);
        return AsyncStorage.setItem(key,data);
    }

    /**
     * get Method
     * @param key
     * @returns {Promise.<*>}
     */
    static async get(key, callback){
        if(typeof callback !== 'function')
            return await AsyncStorage.getItem(key).then((v) => {console.log('get: '+v); return v;}).done();
        return await AsyncStorage.getItem(key).then((v) => {return v;}).done();
    }

    /**
     * getAll method
     * @param callback
     * @returns {Promise.<*>}
     */
    static async getAll(callback){
        if(typeof callback !== 'function')
             return await AsyncStorage.getAllKeys().then((v) => {return v;}).done();
        return await AsyncStorage.getAllKeys().then((v) => {return v;}).done();
    }

}