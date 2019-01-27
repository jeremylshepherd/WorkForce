import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { AnimatedInput as Input, Button, Card, FormInput, CardSection, Spinner } from './Elements';
import { sanFranciscoWeights } from 'react-native-typography';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({email, password});
    }

    renderError() {
        if(this.props.error){
            return (
                <View style={styles.errorView}>
                    <Text style={styles.errorText}>{this.props.error}</Text>
                </View>
            )
        }
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner />
        }else{
             return (
                 <Button
                    containerStyle={{ backgroundColor: '#ccc', color: 'darkslategrey' }}
                    buttonTextStyle={{...sanFranciscoWeights.heavy, fontSize: 32, marginRight: 5, color: 'darkslategrey' }}
                    buttonText="SUBMIT"
                    iconName="first-order"
                    iconColor="darkslategrey"
                    iconSize={32}
                    onPress={this.onButtonPress.bind(this)}
                />
             );
        }
    }

    render() {
        return (
            <View>
                <Card>                
                    <CardSection>
                        <Text style={styles.header}>LOGIN</Text>
                    </CardSection>
                    <CardSection style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'stretch', ...styles.form }}>
                        <Input 
                            label="EMAIL"
                            labelStyle={styles.label}
                            keyboardType="email-address"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                            autoCapitalize="none"
                        />
                        <Input 
                            label="PASSWORD" 
                            labelStyle={styles.label}
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                            autoCapitalize="none"
                            secureTextEntry
                        />
                    </CardSection>
                    {this.renderError()}
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
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
        color: 'darkslategrey'
    },
    form: {
        height: 180
    },
    errorView: {
        backgroundColor: 'red'
    },
    errorText: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center'
    }
});

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    }
}

export default connect(mapStateToProps, 
    { 
        emailChanged, 
        passwordChanged,
        loginUser
    }
 )(LoginForm);