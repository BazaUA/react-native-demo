import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { itemsFetch } from '../actions';
import TitleBar from './activeBar/TitleBar';
import TodoList from './todoList/TodoList';
import Visibility from './filterButtons/Visibility';

const todoItems = [
  {
    name: 'To do todo\'s design and something elseses or not',
    timestamp: '1529803020000',
    completed: false,
  },
  {
    name: 'Selebrate YouthDay',
    timestamp: '1529803024000',
    completed: false,
  },
  {
    name: 'Get some sleep [Real life]',
    timestamp: 1529803028000,
    completed: true,
  }
];

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItems = this.addItems.bind(this);
  }

  componentWillMount() {
    this.props.itemsFetch();
  }

  componentDidMount() {
    this.setState({ items: todoItems });
  }

  deleteItem(index) {
    const items = this.state.items;

    items.splice(index, 1);
    this.setState({ items });
  }

  addItems(item) {
    if (item) {
      const items = this.state.items;
      items.push(item);
      this.setState({ items });
    }
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container} >
        <TitleBar />
        <Visibility />
        <TodoList delete={this.deleteItem} items={this.state.items} />
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
