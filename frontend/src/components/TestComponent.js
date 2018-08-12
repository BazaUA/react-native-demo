import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetch, createItem, deleteItem } from '../actions';

class TestComponent extends Component {
  componentWillMount() {
    this.props.itemsFetch();
    this.props.deleteItem(3);
  }

  // renderRow(item) {
  //   return (
  //     <View>
  //       <Text>{item.id}</Text>
  //     </View>
  //   );
  // }

  render() {
    console.log(this.props);
    return (
      <Text>Hello</Text>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps, { itemsFetch, createItem, deleteItem })(TestComponent);
