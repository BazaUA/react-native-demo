import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetch, createItem, deleteItem } from '../actions';

class TestComponent extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <Text>Hello</Text>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps, { itemsFetch, createItem, deleteItem })(TestComponent);
