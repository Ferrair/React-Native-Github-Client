/**
 * Created by dawizards on 16/10/9.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    DrawerLayoutAndroid
} from 'react-native';
import Repos from './Repos'
import Toolbar from '../widget/Toolbar'
import Following from './Following'
import Me from './Me'
import Login from './Login'

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: Repos,
        };
    }

    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <TouchableHighlight onPress={() => this.gotoMe()}>
                    <Text>照片====个人信息</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.gotoLogin()}>
                    <Text>登陆</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.gotoRepo()}>
                    <Text>仓库</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.gotoFollowing()}>
                    <Text>偶像</Text>
                </TouchableHighlight>
            </View>
        );
        return (
            <View style={styles.container}>
                <DrawerLayoutAndroid
                    drawerWidth={250}
                    ref={'DRAWER'}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}>
                    <Toolbar
                        title={this.state.title}
                        navigator={this.props.navigator}
                        onClickNavButton={()=>this.refs['DRAWER'].openDrawer()}/>
                    <this.state.content route={this.props.route} navigator={this.props.navigator}/>
                </DrawerLayoutAndroid>
            </View>
        );
    }

    gotoLogin() {
        this.setState({content: Login});
        this.refs['DRAWER'].closeDrawer();
    }

    gotoRepo() {
        this.setState({content: Repos});
        this.refs['DRAWER'].closeDrawer();
    }

    gotoFollowing() {
        this.setState({content: Following});
        this.refs['DRAWER'].closeDrawer();
    }

    gotoMe() {
        this.setState({content: Me});
        this.refs['DRAWER'].closeDrawer();
    }
};

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