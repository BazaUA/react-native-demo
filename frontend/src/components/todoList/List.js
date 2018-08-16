import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { height, width } = Dimensions.get('window');

const List = props => {
    const {
        doneItem,
        undoneItem,
        visibleTodos
    } = props;

    const rrenderList = (item) => {
        const toggleItem = () => {
            if (item.done) {
                undoneItem(item.id);
            } else {
                doneItem(item.id);
            }
            // item.done = !item.done;
        };

        const time = new Date(item.date).toDateString();

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.centerPos}
                    onPress={toggleItem}
                >
                    <View
                        style={[
                            styles.checkField,
                            item.done ? styles.completeItem : styles.incompleteItem]}
                    />
                </TouchableOpacity>
                <View style={styles.noteData} >
                    <Text
                        style={[
                            styles.text, item.done ? styles.doneText : styles.undoneText]}
                    >
                        {item.name}
                    </Text>
                    <Text style={styles.date} >[ {time} ]</Text>
                </View>
                <TouchableOpacity
                    style={styles.centerPos} onPress={() => {
                        this.props.deleteItem(item.id);
                    }}
                >
                    <Text style={styles.del} >X</Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
        >
            {visibleTodos.map(rrenderList)}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: {
        flex: 1
    },
    container: {
        width: width - 30,
        height: height / 10,
        flexDirection: 'row',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 4,
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

export default List;
