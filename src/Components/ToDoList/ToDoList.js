// ToDoList.js

import React from 'react';
import {View} from 'react-native';

import ToDoItem from './ToDoItem';

const ToDoList = ({todos, type, toggleComplete, deleteTodo}) => {
    let filteredTodos = todos;
    if (type === 'Active') {
        filteredTodos = todos.filter(todo => todo.complete == false);
    } else if (type === 'Completed') {
        filteredTodos = todos.filter(todo => todo.complete == true);
    }

    filteredTodos = filteredTodos.map((todo, i) => {
        return (
            <ToDoItem 
            key={todo.todoIndex} 
            todo={todo} 
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            />
        )
    });
    
    return (<View>{filteredTodos}</View>);
};
export default ToDoList;