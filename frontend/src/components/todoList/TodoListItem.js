import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class TodoListItem extends Component {
    render() {
        return (
            <View>
                <Text style={styles} >One item to do</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default TodoListItem;
