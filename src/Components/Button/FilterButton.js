import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const FilterButton = ({onPress, type, name}) => (
    <TouchableHighlight
        onPress={onPress}
        underlayColor='#efefef'
        style={[styles.button,
            name === type ? styles.activeButton : null]}>
        <Text style={[
            styles.text,
            name === type ? styles.activeText : null
        ]}>{name}</Text>

        </TouchableHighlight>
)

// All, Active, Compeleted

const styles = StyleSheet.create({
    button: {
        alignSelf: 'flex-end',
        padding: 10,
        borderColor: '#ededed',
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 5

    },
    text: {
        color: '#666666'
    },
    activeButton: { // Add this style
        backgroundColor: 'green',
        fontWeight: 'bold',
    },
    activeText: {
        color: 'white'
    }
});

export default FilterButton;