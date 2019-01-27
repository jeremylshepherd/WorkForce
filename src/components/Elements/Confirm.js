import React, { Component } from 'react';
import {  Modal, Text, View } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { cardSection, text, container } = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}

        >
            <View style={container}>
                <CardSection style={cardSection}>
                    <Text style={text}>{children}</Text>
                </CardSection>
                <CardSection style={cardSection}>
                    <Button
                        onPress={onAccept}
                        buttonText="YES"
                    />
                    <Button
                        onPress={onDecline}
                        buttonText="NO"
                    />
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSection: {
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.95)'
    },
    text: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export { Confirm };
