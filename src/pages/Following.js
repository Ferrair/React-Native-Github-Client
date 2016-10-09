/**
 * Created by dawizards on 16/10/7.
 */
'use strict';
import React, {Component} from 'react';
import {View, Animated, Image, TouchableHighlight, Text, StyleSheet} from 'react-native';

export default class Following extends Component {
    constructor(...args) {
        super(...args);
        this.state = ({
            following: [],// follow的人  https://api.github.com/users/Ferrair/following
        })
    }

    componentDidMount() {
        fetch('https://api.github.com/users/Ferrair/following')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({following: responseJson});

                console.log(this.state.following);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        var itemFollowing = this.state.following.map(function (item) {
            return (
                <Text key={item.id}>
                    {item.login}
                </Text>
            );
        });
        return (
            <View style={styles.container}>
                {itemFollowing}
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