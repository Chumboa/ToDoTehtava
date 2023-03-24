// Heading.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Heading = () => (
    <View style = {styles.header}>
        <Text style={styles.headerText}>
            to-dos
        </Text>
        <Text style={styles.teksti}>
            
        </Text>
    </View>
)



const styles = StyleSheet.create({
    header: {
        marginTop: 80,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 72,
        color: '#FFFFFF',
        fontWeight: '100',
    },
    teksti: {
        textAlign: 'center',
        fontSize: 30,
        color: '#FFFFFF',
        fontWeight: '100',
    }
});

export default Heading;