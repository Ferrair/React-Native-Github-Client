/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableHighlight,
    BackAndroid,
    Navigator,
    DrawerLayoutAndroid
} from 'react-native';
import Login from './src/pages/Login'
import UserManager from './src/util/UserManager';
import Index from './src/pages/Index';

class GitHub extends Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }

    handleBack() {
        if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
            this.navigator.pop();
            return true;
        }
        return false;
    }

    render() {

        return (
            <View style={styles.container}>
                <Navigator
                    ref={component => this.navigator = component}
                    initialRoute={{component: UserManager.username == null ? Login : Index}}
                    renderScene={(route, navigator) => {
                        return <route.component navigator={navigator} route={route} {...route.passProps}/>;
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    content: {
        fontSize: 18,
        color: 'green'
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
    }
});

AppRegistry.registerComponent('GitHub', () => GitHub);
