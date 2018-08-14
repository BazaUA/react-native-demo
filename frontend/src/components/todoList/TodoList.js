import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        const dataItems = this.props.items;
        const { doneItem, undoneItem, deleteItem } = this.props;
        return (
            <View style={styles.content} >
                <FlatList
                    data={dataItems}
                    renderItem={
                        ({ item }) => <TodoListItem
                                        key={item.id} 
                                        item={item} 
                                        deleteItem={deleteItem} 
                                        doneItem={doneItem} 
                                        undoneItem={undoneItem}  
                        />
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
