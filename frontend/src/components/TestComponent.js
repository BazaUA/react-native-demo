import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetch, createItem, deleteItem, doneItem, undoneItem } from '../actions';

class TestComponent extends Component {
  componentWillMount() {
    this.props.itemsFetch();
    this.props.deleteItem(8);
  }

  render() {
    console.log(this.props.items);
    return (
      <Text>Hello</Text>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps, {
  itemsFetch, createItem, deleteItem, doneItem, undoneItem
})(TestComponent);
