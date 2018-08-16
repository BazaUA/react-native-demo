import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoInput from '../todoInput/TodoInput';

class TitleBar extends Component {

    render() {
        const { visibilityFilter } = this.props;
        const getFilterName = (whatFilter) => {
            switch (whatFilter) {
                case 'SHOW_ALL':
                    return 'ALL';
                case 'SHOW_COMPLETED':
                    return 'COMPLETED';
                case 'SHOW_ACTIVE':
                    return 'ACTIVE';
                default:
                    return 'MY';
            }
        };

        return (
            <View style={styles.tools}>
                <View style={styles.bar} >
                    <Text style={styles.title} >{getFilterName(visibilityFilter)} TODOs</Text>
                </View>
                <TodoInput />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    tools: {
        // flex: 1,
        height: 120,
        backgroundColor: '#d3d3d390',
        paddingTop: 0,
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: 'space-evenly'
        // flexDirection: 'row',

    },
    bar: { 
        // height: 50,
        justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'row',
    },
    title: {
        // flex: 1,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        alignSelf: 'center',
    }
});

export default TitleBar;
