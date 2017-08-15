import React, { Component } from 'react';
import { Image } from 'react-native';
import {Header, Left, Button, Icon, Title, Body, Right} from 'native-base';

export default class AppCabecera extends Component {
    render() {
        return (
            <Header>
                <Body>
            <Image source={require('../img/goku.png')}
            style={{width: 65,height: 45}}/>
                </Body>
            </Header>
        );
    }
}
module.export = AppCabecera;