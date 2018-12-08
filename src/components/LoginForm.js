import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import { Button, Card, FormInput, CardSection } from './Elements';
import { sanFranciscoWeights } from 'react-native-typography';

export default class LoginForm extends Component {
    render() {
        return (
            <KeyboardAvoidingView 
                behavior="position" 
                style={{flex:1, justifyContent: 'center'}}>
                <Card>                
                    <CardSection>
                        <Text style={styles.header}>LOGIN</Text>
                    </CardSection>
                    <CardSection style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'stretch', ...styles.form }}>
                        <FormInput 
                            label="EMAIL"
                            labelStyle={styles.label}
                            inputStyle={styles.input}
                        />
                        <FormInput 
                            label="PASSWORD" 
                            labelStyle={styles.label}
                            inputStyle={styles.input}
                            secure
                        />
                    </CardSection>
                    <CardSection>
                        <Button
                            containerStyle={{ backgroundColor: '#ccc', color: 'darkslategrey' }}
                            buttonTextStyle={{...sanFranciscoWeights.heavy, fontSize: 32, marginRight: 5, color: 'darkslategrey' }}
                            buttonText="SUBMIT"
                            iconName="first-order"
                            iconColor="darkslategrey"
                            iconSize={32}
                        />
                    </CardSection>
                </Card>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        ...sanFranciscoWeights.heavy,
        fontSize: 28,
        textAlign: 'center',
        color: 'darkslategrey',
        width: '100%'
    },
    label: {
        ...sanFranciscoWeights.bold,
        fontSize: 16,
        color: 'darkslategrey'
    },
    form: {
        height: 180
    },
    input: {
        backgroundColor: '#eee',
    }
});