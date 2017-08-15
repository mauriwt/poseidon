import React, { Component } from 'react';
import { Text } from 'react-native';
import {Footer, FooterTab, Button, Icon} from 'native-base'

export default class AppPie extends Component {
    render() {
        return (
            <Footer >
                <FooterTab>
                    <Button active>
                        <Icon name="home"/>
                        <Text>Feed</Text>
                    </Button>
                    <Button>
                        <Icon name="paper"/>
                        <Text >Camera</Text >
                    </Button>
                    <Button >
                        <Icon active name="person"/>
                        <Text >About</Text >
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
module.export = AppPie;