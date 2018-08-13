import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class TodoInput extends Component {
    render() {
        return (
            <View style={styles.inputLayer} >
                <TextInput style={styles.inputField} placeholder='What you need to do?' />
                <TouchableOpacity style={styles.addButton} >
                    <Text style={styles.buttonText} >Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputLayer: {
        flexDirection: 'row',
        // flex: 1,
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15
    },
    inputField: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        // marginTop: 5,
        color: '#fff',
        fontSize: 18
        // height: 30
        
    },
    addButton: {
        height: 40,
        width: 50,
        backgroundColor: '#81c04d',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        // marginTop: 20
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    }
});

export default TodoInput;
