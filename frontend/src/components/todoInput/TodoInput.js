import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class TodoInput extends Component {
    render() {
        return (
            <View style={styles.inputLayer} >
                <TextInput
                    style={styles.inputField}
                    placeholder='What you need to do?'
                    placeholderTextColor='#B0ADCD'
                    underlineColorAndroid='transparent'
                    tintColor='#fff'
                    selectionColor='blue'
                />
                <TouchableOpacity
                    style={styles.addButton}
                >
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
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 15,
        color: '#fff',
        fontSize: 20
        // height: 30

    },
    addButton: {
        height: 50,
        width: 60,
        // backgroundColor: '#81c04d' '0a288a',
        backgroundColor: '#0071f9',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 2
        // marginTop: 20
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }
});

export default TodoInput;
