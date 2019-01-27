import React, { Component } from 'react';
import { sanFranciscoWeights } from 'react-native-typography';
import { Card, CardSection, FormInput as Input, Button } from './Elements';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Sunday' });
    }

    render() {
        return (
            <View>
                <Card containerStyle={{ flex: 1, backgroundColor: 'pink', alignItems: 'center', justifyContent: 'space-around' }}>
                    <EmployeeForm {...this.props} />
                    <CardSection>
                        <Button
                            containerStyle={{ backgroundColor: '#ccc', color: 'darkslategrey' }}
                            buttonTextStyle={{...sanFranciscoWeights.heavy, fontSize: 32, marginRight: 5, color: 'darkslategrey' }}
                            buttonText="CREATE"
                            iconName="jedi"
                            iconColor="darkslategrey"
                            iconSize={32}
                            onPress={this.onButtonPress.bind(this)}
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

export default connect(mapStateToProps, { 
    employeeUpdate,
    employeeCreate
})(EmployeeCreate);
