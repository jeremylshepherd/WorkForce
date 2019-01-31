import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

const DismissKeyboard = ({ children, style }) => {
    return (
        <TouchableWithoutFeedback
            style={{ ...style }}
            onPress={() => Keyboard.dismiss()}
        >
            {children}
        </TouchableWithoutFeedback>
    );
};
export { DismissKeyboard };
