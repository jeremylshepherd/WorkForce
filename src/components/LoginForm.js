import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, FormInput, CardSection, Button } from './Elements';

export default class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <FormInput />
                </CardSection>
                <CardSection>
                    <FormInput />
                </CardSection>
                <CardSection>
                    <Button/>
                </CardSection>
            </Card>
        );
    }
}
