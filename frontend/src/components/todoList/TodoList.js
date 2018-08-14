import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        const dataItems = this.props.items;
        console.log(dataItems);
        return (
            <View style={styles.content} >
                <FlatList
                    data={dataItems}
                    renderItem={
                        ({ item }) => <TodoListItem key={item.timestamp} item={item} />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center'
    },
    noteStyle: {
        height: 50,
        color: 'white'
    },
    list: {
        alignItems: 'center'
    }
});

export default TodoList;
