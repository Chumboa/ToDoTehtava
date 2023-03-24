// Button.js

import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const Button = ({submitToDo}) => (
    <View style={styles.buttonContainer}>
        <TouchableHighlight
        style={styles.button}
        onPress={submitToDo}
        underlayColor='#efefef'>
            <Text style={styles.submit}>
                Add ToDo item
            </Text>
        </TouchableHighlight>
    </View>
);


const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'flex-end',
        marginBottom: 20
    },
    button: {
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#ffffff',
        width: 200,
        marginRight: 20,
        marginTop: 15,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit: {
        color: '#666666',
        fontWeight: '600'
    }
});

export default Button;