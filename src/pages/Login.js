/**
 * Created by dawizards on 16/10/9.
 */
'use strict';
import React, {Component} from 'react';
import {View, Animated, Image, TouchableHighlight, TextInput, Text, StyleSheet, ListView} from 'react-native';
import Button from 'react-native-button';
import UserManager from '../util/UserManager';
import Index from './Index';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="输入Github用户名"
                    onChangeText={(username) => this.setState({username})}
                />
                <Button onPress={() => this.login()}>>
                    记住用户名
                </Button>
            </View>
        );
    }

    login() {
        if (!this.state.username) {
            return;
        }

        fetch('https://api.github.com/users/' + this.state.username)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.message == 'Not Found') {
                    return;
                }
                UserManager.username = responseJson.login;
                this.props.navigator.push({
                    component: Index,
                    navigator: this.props.navigator,
                    route: this.props.route
                })
            })
            .catch((error) => {
                console.error(error);
            });

    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        fontSize: 18,
        color: 'green'
    },
});