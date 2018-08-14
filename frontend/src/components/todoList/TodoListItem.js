import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

class TodoListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: Object.assign({}, props.item),
            isCompleted: this.props.item.completed
        };
    }

    toggleItem = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted
            };
        });
    }

    render() {
        const item = this.state.item;
        const time = new Date(parseInt(item.timestamp, 10)).toDateString();
        const isCompleted = this.state.isCompleted;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.centerPos}
                    onPress={this.toggleItem}
                >
                    <View
                        style={[
                            styles.checkField,
                            isCompleted ? styles.completeItem : styles.incompleteItem]}
                    />
                </TouchableOpacity>
                <View style={styles.noteData} >
                    <Text
                        style={[
                            styles.text, isCompleted ? styles.doneText : styles.undoneText]}
                    >
                        {item.name}
                    </Text>
                    <Text style={styles.date} >[ {time} ]</Text>
                </View>
                <TouchableOpacity style={styles.centerPos}>
                    <Text style={styles.del} >X</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width - 30,
        height: height / 10,
        flexDirection: 'row',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        backgroundColor: '#1c2937',
        margin: 1
    },
    centerPos: {
        justifyContent: 'center',
    },
    checkField: {
        width: 30,
        height: 30,
        borderRadius: 10,
        borderColor: '#d3d3d3',
        borderWidth: 4,
        color: '#fff',
        margin: 10
    },
    completeItem: {
        backgroundColor: 'green'
    },
    incompleteItem: {
        backgroundColor: '#7b7d7d',
    },
    noteData: {
        justifyContent: 'center',
        width: width - 110
    },
    doneText: {
        color: '#7b7d7d',
        textDecorationLine: 'line-through'
    },
    undoneText: {
        color: '#fff',
    },
    del: {
        fontSize: 25,
        // color: '#7b7d7d',
        color: 'red',
        fontWeight: 'bold'
    },
    text: {
        color: '#fff',
        fontSize: 18
    },
    date: {
        color: '#fff'
    }
});

export default TodoListItem;
