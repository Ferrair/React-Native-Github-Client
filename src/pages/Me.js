/**
 * Created by dawizards on 16/10/7.
 */
'use strict';
import React, {Component} from 'react';
import {View, Animated, Image, TouchableHighlight, Text, StyleSheet} from 'react-native';

export default class Me extends Component {
    constructor(...args) {
        super(...args);
        this.state = ({
            me: null, // 当前用户信息 https://api.github.com/users/Ferrair
        })
    }

    componentDidMount() {
        fetch('https://api.github.com/users/Ferrair')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({me: responseJson});
                console.log(this.state.me);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.me.login}
            </View>
        )
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