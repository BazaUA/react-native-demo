import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

class TestComponent extends Component {
  componentWillMount() {
    this.props.itemsFetch();
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

