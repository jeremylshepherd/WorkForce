import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './Elements';
import { Actions } from 'react-native-router-flux';
import { sanFranciscoWeights } from 'react-native-typography';

class ListItem extends Component {

    onItemPress() {
        console.log(this.props);
        Actions.employeeEdit({ employee: this.props });
    }

    render() {
        const { name } = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.onItemPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={{ ...sanFranciscoWeights.bold, fontSize: 20, padding: 20 }}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default ListItem;
