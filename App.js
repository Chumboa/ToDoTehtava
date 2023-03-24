/**
 * Sample React Native App
 * 
 * @format
 * @flow strict-local
 */

import React, { Component } from "react";
// import type {Node} from "react";
import {
    ScrollView,
    StyleSheet,
    View,
    Text
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Filters from './src/Components/Filters/Filters';
import Heading from './src/Components/Heading/Heading';
import Input from './src/Components/Input/Input';
import Button from './src/Components/Button/Button';
import ToDoList from './src/Components/ToDoList/ToDoList';



//global todoIndex
let todoIndex = 0;

class App extends Component {
    constructor() {
        super();
        this.getData();
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All'
        }
        // this.submitTodo = this.submitTodo.bind(this);
    }
    inputChange(inputValue) {
        console.log(`input value change ${inputValue}`);
        this.setState({ inputValue });
    }
    submitToDo = async () => {
        if(this.state.inputValue.match(/^\s*$/)) {
            return;
        }
        const todo = {
            title: this.state.inputValue,
            todoIndex,
            complete: false
        }
        todoIndex++;
        const todos = [...this.state.todos, todo];
        this.setState({todos, inputValue: ''});
        try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
        } catch (e) {
            //Error savin data
        }
    }
    getData = async () => {
        try {
          const value = await AsyncStorage.getItem('todos');
          if(value !== null) {
            this.setState({todos: JSON.parse(value)});
          }
        } catch(e) {
          // error reading value
        }
      }
      
    toggleComplete = (idx) => {
        let todos = this.state.todos;
        todos.forEach ((todo) => {
            if(todo.todoIndex === idx) {
                todo.complete =!todo.complete;
            }
        })
        this.setState({todos});
        console.log(`State set to ${JSON.stringify(this.state)}`)
    }

    filteredComplete = () => {
        let { todos } = this.state;
        let filteredTodos;
        filteredTodos = todos.filter(todo => todo.complete == true);
        this.setState({filteredTodos});        
    }
    filteredAll = () => {
        let { todos } = this.state;
        let filteredTodos;
        filteredTodos = todos.filter(todo => todo.complete == true ||todo.complete == false);
        this.setState({filteredTodos});        
    }
    filteredActive = () => {
        let { todos } = this.state;
        let filteredTodos;
        filteredTodos = todos.filter(todo => todo.complete == false);
        this.setState({filteredTodos});        
    }

    deleteTodo = (idx) => {
        let { todos } = this.state;
        todos = todos.filter((todo) => todo.todoIndex !== idx)
        this.setState({todos});
    } 
    


    
    


    render() {
        const { inputValue, todos} = this.state;
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps="always"
                style={styles.content}>
                <Heading />
                <Input 
                inputValue={inputValue}
                inputChange={(text) => this.inputChange(text)}
                />
                <Filters
                todos={todos}
                filteredComplete={this.filteredComplete}
                filteredActive={this.filteredActive}
                filteredAll={this.filteredAll}
                />
                <Button 
                submitToDo={this.submitToDo}/>
                <ToDoList 
                todos={todos}
                toggleComplete={this.toggleComplete}
                deleteTodo={this.deleteTodo}
                />
            </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01a699'
    },
    content: {
        flex: 1,
        padding: 30
    },
    mainview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default App;
