import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { sanFranciscoWeights } from 'react-native-typography';
import { Card, CardSection, FormInput as Input, Button, Confirm } from './Elements';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeDelete, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';
import { Actions } from 'react-native-router-flux';

class EmployeeEdit extends Component {

    state = {
        showModal: false
    }

    componentWillMount() {
        for(let prop in this.props.employee) {
            this.props.employeeUpdate({ prop, value: this.props.employee[prop]});
        }
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        const { uid } = this.props.employee;
        this.props.employeeSave({ name, phone, shift, uid });
    }


    sendSMS() {
        const { phone, shift, name } = this.props;
        const message = `Hello ${name},\nJust a friendly reminder that your next shift is on ${shift}. Look forward to seeing you then.
        `;
        Communications.text(phone, message);
    }

    destroyEmployee() {
        const { uid } = this.props.employee;
        this.props.employeeDelete({ uid });
        this.hideModal();
    }

    showModal() {
        this.setState({ showModal: true });
    }

    hideModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <View>
                <Card containerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>
                    <EmployeeForm {...this.props} />
                    <CardSection>
                        <Button
                            containerStyle={styles.cont}
                            buttonTextStyle={styles.buttonText}
                            buttonText="UPDATE"
                            iconName="galactic-republic"
                            iconColor="darkslategrey"
                            iconSize={32}
                            onPress={this.onButtonPress.bind(this)}
                        />
                    </CardSection>
                    <CardSection>
                        <Button
                            containerStyle={styles.sms}
                            buttonTextStyle={styles.buttonText}
                            buttonText="TEXT"
                            iconName='paper-plane'
                            iconColor="darkslategrey"
                            iconSize={32}
                            onPress={this.sendSMS.bind(this)}
                        />
                    </CardSection>
                    <CardSection>
                        <Button
                            containerStyle={styles.destroy}
                            buttonTextStyle={styles.buttonText}
                            buttonText="DESTROY"
                            iconName='sith'
                            iconColor="darkslategrey"
                            iconSize={32}
                            onPress={() => this.showModal()}
                        />
                    </CardSection>
                    <Confirm
                        visible={this.state.showModal}
                        onAccept={this.destroyEmployee.bind(this)}
                        onDecline={this.hideModal.bind(this)}
                    >
                        Destroy this Apprentice?
                    </Confirm>
                </Card>
            </View>
        );
    }
}

const styles = {
    cont: { 
        backgroundColor: '#bac3c5'
    },
    buttonText: {
        ...sanFranciscoWeights.heavy, 
        fontSize: 32, 
        marginRight: 5, 
        color: 'darkslategrey' 
    },
    sms: {
        backgroundColor: '#27ae60'
    },
    destroy: {
        backgroundColor: '#c0392b'
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
}

export default connect(mapStateToProps, { 
    employeeUpdate,
    employeeDelete,
    employeeSave
})(EmployeeEdit);
