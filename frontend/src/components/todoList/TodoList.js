import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    render() {
        return (
            <View style={styles.content} >
                <FlatList
                    data={[
                        { note: 'First todo item' },
                        { note: 'Second todo Item' },
                        { note: 'Third todo Item' }
                    ]}
                    renderItem={({ item }) => <Text style={styles.noteStyle} >{item.note}</Text>}
                />
                <TodoListItem />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1
    },
    noteStyle: {
        height: 50,
        color: 'white'
    }
});

export default TodoList;
