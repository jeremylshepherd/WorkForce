import React, { Component } from 'react';
import { sanFranciscoWeights } from 'react-native-typography';
import { Card, CardSection, FormInput as Input, Button } from './Elements';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {

    renderDays() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days.map(d => <Picker.Item key={d} label={d} value={d} />);
    }

    render() {
        return (
            <View>
                <Card containerStyle={{ flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'space-around' }}>
                    <CardSection>
                        <Input
                            label="Name"
                            placeholder="Terry Doe"
                            value={this.props.name}
                            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                        />
                    </CardSection>
                    <CardSection>
                        <Input 
                            label="Phone"
                            placeholder="555-555-5555"
                            keyboardType="phone-pad"
                            dataDetectorTypes="phoneNumber"
                            value={this.props.phone}
                            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}                      
                        />
                    </CardSection> 
                    <CardSection containerStyle={{ flexDirection: 'column' }}> 
                        <Text style={{ paddingTop: 5, paddingLeft: 8 }}>Shift</Text>
                        <Picker
                            selectedValue={this.props.shift}
                            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })} 
                            style={{ flex: 1 }} >
                            {this.renderDays()}
                        </Picker>
                    </CardSection>
                    <CardSection>
                        <Button
                            containerStyle={{ backgroundColor: '#ccc', color: 'darkslategrey' }}
                            buttonTextStyle={{...sanFranciscoWeights.heavy, fontSize: 32, marginRight: 5, color: 'darkslategrey' }}
                            buttonText="SAVE"
                            iconName="rebel"
                            iconColor="darkslategrey"
                            iconSize={32}
                        />
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
