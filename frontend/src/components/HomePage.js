import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetch } from '../actions';
import TitleBar from './activeBar/TitleBar';
import TodoList from './todoList/TodoList';
import Visibility from './filterButtons/Visibility';

class HomePage extends Component {

  componentWillMount() {
    this.props.itemsFetch();
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container} >
        <TitleBar />
        <Visibility />
        <TodoList />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050020'
    // backgroundColor: '#0C024D', '#2B15B6, '#096AAA'
  },
});

export default connect(mapStateToProps, { itemsFetch })(HomePage);
