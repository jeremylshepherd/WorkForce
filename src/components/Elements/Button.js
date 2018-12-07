//import liraries
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// create a component
const Button = ({ onPress, containerStyle, buttonTextStyle, buttonText, iconColor, iconName, iconSize}) => (
    <TouchableOpacity onPress={onPress} style={{...styles.container, ...containerStyle}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}> 
            <Text style={buttonTextStyle}>{buttonText}</Text>
            {iconName !== undefined 
                ? <Icon 
                    name={iconName} 
                    size={iconSize} 
                    color={iconColor} 
                />
                : null
            }
        </View>
    </TouchableOpacity>
);

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,        
    }
});

//make this component available to the app
export { Button };
