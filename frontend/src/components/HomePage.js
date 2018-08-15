import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetch, createItem, deleteItem, doneItem, undoneItem } from '../actions';
import TitleBar from './activeBar/TitleBar';
import TodoList from './todoList/TodoList';
import Visibility from './filterButtons/Visibility';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.undoneItem = this.undoneItem.bind(this);
    this.doneItem = this.doneItem.bind(this);
  }

  componentWillMount() {
    this.props.itemsFetch();
  }

  deleteItem(itemId) {
    this.props.deleteItem(itemId);
  }

  doneItem(itemId) {
    this.props.doneItem(itemId);
  }

  undoneItem(itemId) {
    this.props.undoneItem(itemId);
  }


  render() {
    return (
      <View style={styles.container} >
        <TitleBar inputValue />
        <Visibility />
        <TodoList
          deleteItem={this.deleteItem}
          items={this.props.items}
          doneItem={this.doneItem}
          undoneItem={this.undoneItem}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050020'
    // backgroundColor: '#0C024D', '#2B15B6, '#096AAA'
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
  itemsFetch, createItem, deleteItem, doneItem, undoneItem
})(HomePage);
