import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions'
import { Button, Card, FormInput, CardSection } from './Elements';
import { sanFranciscoWeights } from 'react-native-typography';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

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
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                            autoCapitalize="none"
                        />
                        <FormInput 
                            label="PASSWORD" 
                            labelStyle={styles.label}
                            inputStyle={styles.input}
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
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

const mapStateToProps = ({ email, password }) => {
    return {
        email,
        password
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);