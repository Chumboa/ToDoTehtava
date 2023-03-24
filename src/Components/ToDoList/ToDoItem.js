// ToDoItem.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoButton from '../Button/TodoButton';

const ToDoItem = ({todo, toggleComplete, deleteTodo}) => (
    <View style={styles.toDoContainer}>
        <Text style={styles.toDoText}>
            {todo.title}
        </Text>
        <View style={styles.buttons}>
            <TodoButton
                name='Done'
                complete={todo.complete}
                onPress={() => toggleComplete(todo.todoIndex)} />
            <TodoButton
                name='Delete'
                onPress={() => deleteTodo(todo.todoIndex)} />
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
        paddinTop: 7,
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

export default ToDoItem;