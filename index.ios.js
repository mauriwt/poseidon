import React, {Component} from 'react';
import {Text, AppRegistry} from 'react-native';
import {Container, StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import main from './native-base-theme/variables/main';

import AppaCabecera from './src/components/cabecera';
import AppPie from './src/components/pie';
import AppCuerpo from './src/components/cuerpo';

export default class test extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(main)}>
      <Container>
        <AppaCabecera/>
        <AppCuerpo/>
        <AppPie/>
      </Container>
      </StyleProvider >
    );
  }
}

AppRegistry.registerComponent('test', () => test);