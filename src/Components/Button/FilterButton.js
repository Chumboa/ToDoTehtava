import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const FilterButton = ({onPress, complete, name}) => (
    <TouchableHighlight
        onPress={onPress}
        underlayColor='#efefef'
        style={styles.button}>
        <Text style={[
            styles.text,
            complete ? styles.complete: null,
        ]}>{name}</Text>

        </TouchableHighlight>
);

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
    complete: {
        color: 'green',
        fontWeight: 'bold'
    }
});

export default FilterButton;