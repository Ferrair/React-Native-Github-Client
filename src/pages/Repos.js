/**
 * Created by dawizards on 16/10/7.
 */
'use strict';
import React, {Component} from 'react';
import {View, Animated, Image, TouchableHighlight, Text, StyleSheet, ListView} from 'react-native';
import ItemRepo from './ItemRepo'

export default class Repos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repos: [],
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/Ferrair/repos')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({repos: responseJson});
                console.log(this.state.repos);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        var itemRepo = this.state.repos.map(function (item) {
            /*
             * 在这里要用 ()=> .因为()后的this表示Repos.
             * 同时map 里面的参数要传入 this.
             */
            return (
                <TouchableHighlight key={item.id} onPress={() => this.goToItemRepo(item)}>
                    <Text >
                        {item.name}
                    </Text>
                </TouchableHighlight>
            );
        }, this);
        return (
            <View style={styles.container}>
                {itemRepo}
            </View>
        )
    }

    goToItemRepo(item) {
        this.props.navigator.push({
            component: ItemRepo,
            passProps: {item}
        })
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