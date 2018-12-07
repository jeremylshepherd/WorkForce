//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const FormInput = ({ label, value, onChangeText, secure, inputStyle, labelStyle, keyboard, placeholder}) => {
    return (
        <View style={styles.container}>
            <Text style={{...styles.label, ...labelStyle}}>{label}</Text>
            <TextInput 
                style={{...styles.input, ...inputStyle}}
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                secureTextEntry={secure}
                autoCorrect={false}
                keyboardType={!keyboard ? 'default': keyboard}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        paddingLeft: 5,
        paddingRight: 4
    },
    label: {
        flex: 2,
    },
    input: {
        flex: 5,
        fontSize: 24,
    }
});

//make this component available to the app
export { FormInput };
