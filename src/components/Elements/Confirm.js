import React, { Component } from 'react';
import {  Modal, Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';
import { sanFranciscoWeights } from 'react-native-typography';
import { Card } from './Card';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { cardSection, text, container } = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}

        >
            <TouchableWithoutFeedback onPress={onDecline}>
                <View style={container} >
                    <Card style={{ ...styles.cardSection, borderRadius: 5, padding: 10 }}>
                        <CardSection style={cardSection}>
                            <Text style={{...text, lineHeight: 40, }}>{children}</Text>
                        </CardSection>
                        <CardSection style={cardSection}>
                            <Button
                                onPress={onAccept}
                                buttonText="DO IT!"
                                containerStyle={{backgroundColor: "#c0392b"}}
                                buttonTextStyle={styles.text}
                            />
                        </CardSection>
                        <CardSection style={cardSection}>
                            <Button
                                onPress={onDecline}
                                buttonText="NOT YET"
                                containerStyle={{backgroundColor: "#d5dbdc"}}
                                buttonTextStyle={styles.text}
                            />
                        </CardSection>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = {
    cardSection: {
        justifyContent: 'center',
        backgroundColor: '#f1f3f3',
        padding: 10
    },
    text: {
        ...sanFranciscoWeights.heavy,
        fontSize: 18,
        color: '#2d3436',
        textAlign: 'center'
    },
    container: {
        backgroundColor: 'rgba(23, 27, 28, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export { Confirm };
