import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  itemsFetch,
  createItem,
  deleteItem,
  doneItem,
  undoneItem,
  setVisibilityFilter
} from '../actions';
import TitleBar from './activeBar/TitleBar';
import TodoListView from './todoList/TodoListView';
import Visibility from './filterButtons/Visibility';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.undoneItem = this.undoneItem.bind(this);
    this.doneItem = this.doneItem.bind(this);
    this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
  }

  componentWillMount() {
    this.props.itemsFetch();
  }

  setVisibilityFilter(filter) {
    this.props.setVisibilityFilter(filter);
  }

  doneItem(itemId) {
    this.props.doneItem(itemId);
  }

  undoneItem(itemId) {
    this.props.undoneItem(itemId);
  }

  deleteItem(itemId) {
    this.props.deleteItem(itemId);
  }

  render() {
    return (
      <View style={styles.container} >
        <TitleBar
          inputValue
          visibilityFilter={this.props.visibilityFilter}
        />
        <Visibility
          setVisibilityFilter={this.setVisibilityFilter}
          visibilityFilter={this.props.visibilityFilter}
        />
        <TodoListView
          deleteItem={this.deleteItem}
          items={this.props.items}
          doneItem={this.doneItem}
          undoneItem={this.undoneItem}
          visibilityFilter={this.props.visibilityFilter}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050020'
  },
});

const mapStateToProps = (state) => {
  return {
    items: state.items,
    inputValue: state.input.inputValue,
    visibilityFilter: state.visibilityFilter
  };
};

export default connect(mapStateToProps, {
  itemsFetch, createItem, deleteItem, doneItem, undoneItem, setVisibilityFilter
})(HomePage);
