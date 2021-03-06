import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TodoListItem from './TodoListItem';

class TodoListView extends Component {

    render() {
        const {
            items,
            visibilityFilter,
            doneItem, 
            undoneItem, 
            deleteItem
        } = this.props;

        const dataItems = items;

        const getVisibleTodos = (allTodos, whatFilter) => {
            switch (whatFilter) {
                case 'SHOW_ALL':
                    return allTodos;
                case 'SHOW_COMPLETED':
                    return allTodos.filter(
                        item => item.done
                    );
                case 'SHOW_ACTIVE':
                    return allTodos.filter(
                      item => !item.done
                    );
                default:
                    return allTodos;
            }
        };

        const visibleTodos = getVisibleTodos(
            dataItems,
            visibilityFilter
        );

        return (
            <View style={styles.content} >
                <FlatList
                    data={visibleTodos}
                    renderItem={
                        ({ item }) => <TodoListItem
                            key={item.id}
                            item={item}
                            deleteItem={deleteItem}
                            doneItem={doneItem}
                            undoneItem={undoneItem}
                        />
                    }
                    keyExtractor={(item) => item.id.toString()}
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

export default TodoListView;
