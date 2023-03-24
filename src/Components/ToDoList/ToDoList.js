// ToDoList.js

import React from 'react';
import {View} from 'react-native';

import ToDoItem from './ToDoItem';

const ToDoList = ({todos, toggleComplete, deleteTodo}) => {
    todos = todos.map((todo, i) => {
        return (
            <ToDoItem 
            key={todo.todoIndex} 
            todo={todo} 
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            />
        )
    });
    return (<View>{todos}</View>);
};

//const styles = StyleSheet.create({
//});

export default ToDoList;