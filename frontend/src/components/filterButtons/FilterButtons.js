import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class FilterButtons extends Component {
    render() {
        return (
            <View style={styles.bar}>
                <Text style={styles.but} >Here Filter Buttons</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row'
    },
    but: {
        paddingTop: 15,
        paddingBottom: 15,
        flex: 1
    },
    text: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },

});

export default FilterButtons;
