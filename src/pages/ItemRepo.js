/**
 * Created by dawizards on 16/10/7.
 */
import React, {Component} from 'react';
import {View, Animated, Image, TouchableHighlight, Text, StyleSheet} from 'react-native';

export default class ItemRepo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.avatar} source={{uri: this.props.item.owner.avatar_url}}/>
                    <Text>Master : {this.props.item.owner.login}</Text>
                </View>
                <Text>
                    项目名称： {this.props.item.name}
                </Text>
                <Text>
                    项目描述： {this.props.item.description ? this.props.item.description : '暂无'}
                </Text>
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

    avatar: {
        width: 20,
        height: 20,
    },
});