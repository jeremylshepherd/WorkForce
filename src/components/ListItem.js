import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './Elements';
import { Actions } from 'react-native-router-flux';
import { sanFranciscoWeights } from 'react-native-typography';
import Icon from 'react-native-vector-icons/FontAwesome5';

class ListItem extends Component {

    onItemPress() {
        console.log(this.props);
        Actions.employeeEdit({ employee: this.props });
    }

    render() {
        const { name } = this.props;
        return (
            <TouchableHighlight 
                onPress={this.onItemPress.bind(this)} 
                underlayColor="#d5dbdc"
            >
                <View>
                    <CardSection>
                        <View style={{ padding: 20, flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Icon name="sith" color="#2d3436" size={24}/>
                            <Text style={{ ...sanFranciscoWeights.bold, fontSize: 20, color: "#2d3436", paddingLeft: 5 }}>{name}</Text>
                        </View>                        
                    </CardSection>
                </View>
            </TouchableHighlight>
        );
    }
}

export default ListItem;
