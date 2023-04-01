import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FilterButton from '../Button/FilterButton';

const Filters = ({filteredComplete,filteredActive,filteredAll,type, clearAsyncStorage}) => (
    <View style={styles.toDoContainer}>
    <Text style={styles.toDoText}>Show:</Text>
    <View style={styles.buttons}>
    <FilterButton 
        name='All'
        onPress={() => filteredAll()}
        type = {type}/>
    <FilterButton 
        name='Active'
        onPress={() => filteredActive()}
        type = {type}/>
    <FilterButton 
        name='Completed'
        onPress={() => filteredComplete()}
        type = {type}/>
    <FilterButton 
        name='Clear storage'
        onPress={() => clearAsyncStorage()}
        type = {type}/>
    </View>
  </View>
);

const styles = StyleSheet.create({
    toDoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#ededed',
        paddingLeft: 14,
        paddingBottom: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        flexDirection: 'row',
        alignItems: 'center'
    },
    toDoText: {
        fontSize: 17,
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default Filters;