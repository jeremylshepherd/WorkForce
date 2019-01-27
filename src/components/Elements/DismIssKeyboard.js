import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const DismisKeyboard = ({ children }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
};
export { DismisKeyboard };
