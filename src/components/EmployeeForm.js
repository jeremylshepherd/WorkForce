import React, { Component } from 'react';
import { Keyboard, KeyboardAvoidingView, Picker, Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection, AnimatedInput as Input, DismissKeyboard } from './Elements';
import { sanFranciscoWeights } from 'react-native-typography';

const EmployeeForm = (props) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <DismissKeyboard>
            <KeyboardAvoidingView behavior="padding" containerStyle={{ flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'space-around' }}>            
                <CardSection style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'stretch', ...styles.form }}>
                    <Input
                        label="Name"
                        keyboardType="email-address"
                        labelStyle={styles.label}
                        value={props.name}
                        onChangeText={value => props.employeeUpdate({ prop: 'name', value })}
                        autoCorrect={false}
                        autoComplete="off"
                        returnKeyType="next"
                    />
                    <Input 
                        label="Phone"
                        labelStyle={styles.label}
                        inputStyle={styles.input}
                        value={props.phone}
                        onChangeText={value => props.employeeUpdate({ prop: 'phone', value })}
                        autoCorrect={false}
                        autoComplete="off"
                        returnKeyType="done"
                    />
                </CardSection> 
                <CardSection containerStyle={{ flexDirection: 'column', borderTopWidth: 0 }}>                 
                    <Text style={{ ...styles.label, position: 'absolute', paddingTop: 5, marginLeft: 25, fontSize: 16, color: 'darkslategrey' }}>Shift</Text>
                    <Picker
                        onFocus={() => Keyboard.dismiss()}
                        selectedValue={props.shift}
                        onValueChange={value => props.employeeUpdate({ prop: 'shift', value })} 
                        style={{ flex: 1 }} >
                        { days.map(d => <Picker.Item key={d} label={d} value={d} />) }
                    </Picker>                
                </CardSection>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    );
};

const styles = {
    label: {
        ...sanFranciscoWeights.bold,
        color: 'darkslategrey'
    },
    input: {
        borderBottomWidth: 0
    },
    form: {
        height: 180
    },
}

export default EmployeeForm;
