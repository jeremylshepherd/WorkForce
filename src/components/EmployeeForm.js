import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { CardSection, FormInput as Input } from './Elements';

const EmployeeForm = (props) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <View containerStyle={{ flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'space-around' }}>
            <CardSection>
                <Input
                    label="Name"
                    placeholder="Terry Doe"
                    value={props.name}
                    onChangeText={value => props.employeeUpdate({ prop: 'name', value })}
                />
            </CardSection>
            <CardSection>
                <Input 
                    label="Phone"
                    placeholder="555-555-5555"
                    keyboardType="phone-pad"
                    dataDetectorTypes="phoneNumber"
                    value={props.phone}
                    onChangeText={value => props.employeeUpdate({ prop: 'phone', value })}                      
                />
            </CardSection> 
            <CardSection containerStyle={{ flexDirection: 'column' }}> 
                <Text style={{ paddingTop: 5, paddingLeft: 8 }}>Shift</Text>
                <Picker
                    selectedValue={props.shift}
                    onValueChange={value => props.employeeUpdate({ prop: 'shift', value })} 
                    style={{ flex: 1 }} >
                    { days.map(d => <Picker.Item key={d} label={d} value={d} />) }
                </Picker>
            </CardSection>
        </View>
    );
};

export default EmployeeForm;
