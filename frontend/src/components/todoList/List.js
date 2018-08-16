import React from 'react';
import TodoListItem from './TodoListItem';

const List = props => {
    const {
        items,
        actions,
        visibleTodos,
    } = props;

    return (
        <TodoListItem />
    );
}

export default List;
