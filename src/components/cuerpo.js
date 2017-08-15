import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Icon, List, ListItem, InputGroup, Input, Picker, Button, Text } from 'native-base'
const Item = Picker.Item;
export default class AppCuerpo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: [],
            },
        };
    }
    onValueChange(value) {
        this.setState({
            selected1: value,
        });
    }
    render() {
        return (
            <Content>
                <List>
                    <ListItem>
                        <InputGroup>
                            <Icon name="egg" style={{ color: '#0A69FE' }} />
                            <Input form-control inlineLabel label="First Name" placeholder="Nombre" />
                        </InputGroup>
                    </ListItem>

                    <ListItem>
                        <InputGroup>
                            <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                            <Input placeholder="CORREO ELECTRONICO" />
                        </InputGroup>
                    </ListItem>
                    <ListItem>
                        <InputGroup>
                            <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                            <Input placeholder="CONTRASEÑA" secureTextEntry />
                        </InputGroup>
                    </ListItem>
                    <ListItem>
                        <InputGroup>
                            <Icon name="ios-call" style={{ color: '#0A69FE' }} />
                            <Input placeholder="TELEFONO" keyboardType="numeric" />
                        </InputGroup>
                    </ListItem>

                    <ListItem iconLeft>
                        <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
                        <Text>SEXO</Text>
                        <Picker
                            iosHeader="Select one"
                            mode="dropdown"
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this)} >
                            <Item label="Male" value="key0" />
                            <Item label="Female" value="key1" />
                            <Item label="Other" value="key2" />
                        </Picker>
                    </ListItem>

                    <ListItem>
                        <InputGroup >
                            <Input stackedLabel label="Permanent Address" placeholder="DIRECCION" />
                        </InputGroup>
                    </ListItem>
                </List>
                <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                    <Text>Registrase</Text>
                </Button>
            </Content>
        );
    }
}
module.export = AppCuerpo;