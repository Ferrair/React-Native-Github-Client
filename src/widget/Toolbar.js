/**
 * Created by dawizards on 16/10/9.
 */
'use strict';

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');

export default class MyToolbar extends Component {
    render() {
        var navigator = this.props.navigator;
        return (
            <ToolbarAndroid
                title={this.props.title}
                style={styles.toolbar}
                titleColor={'blue'}
                onIconClicked={this.props.onClickNavButton}/>
        );
    }
}

var styles = StyleSheet.create({
    toolbar: {
        flex: 1,
        height: 48,
    },

});
