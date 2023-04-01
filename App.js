/**
 * Sample React Native App
 * 
 * @format
 * @flow strict-local
 */

import React, { Component} from "react";
// import type {Node} from "react";
import {
    ScrollView,
    StyleSheet,
    View
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
        let existingTodos = await this.getData();
        const todos = [...this.state.todos, todo];
        this.setState({todos, inputValue: ''});
        try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
        console.log("Updated todos", todos)
    } catch (e) {
        console.log("Error saving data");
    }
}

    getData = async () => {
        try {
        const value = await AsyncStorage.getItem('todos');
        if(value !== null) {
            this.setState({todos: JSON.parse(value)});
        }
        return todos ? JSON.parse(todos) : [];
        } catch(e) {
        // error reading value
        }
    }

    clearAsyncStorage = async() => {
        AsyncStorage.clear();
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
        let type = this.state.type;
        type = 'Completed';
        this.setState({type});
        console.log(`input value change ${type}`);
    }
    filteredAll = () => {
        let type = this.state.type;
        type = 'All';
        this.setState({type});
        console.log(`input value change ${type}`);    
    }
    filteredActive = () => {
        let type = this.state.type;
        type = 'Active';
        this.setState({type: 'Active'});
        console.log(`input value change ${type}`);
    }

    deleteTodo = (idx) => {
        let { todos } = this.state;
        todos = todos.filter((todo) => todo.todoIndex !== idx)
        this.setState({todos});
    } 

1231
    render() {
        const { inputValue, filteredTodos, todos, type} = this.state;
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
                type={type}
                filteredComplete={this.filteredComplete}
                filteredActive={this.filteredActive}
                filteredAll={this.filteredAll}
                clearAsyncStorage={this.clearAsyncStorage}
                />
                <Button 
                submitToDo={this.submitToDo}/>
                <ToDoList 
                type={type}
                todos={todos}
                filteredTodos={filteredTodos}
                toggleComplete={this.toggleComplete}
                deleteTodo={this.deleteTodo}
                />
            </ScrollView>
            </View>
        )
    }
}
333
333

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
