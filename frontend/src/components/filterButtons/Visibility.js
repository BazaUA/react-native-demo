import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonFilter from './ButtonFilter';

const Visibility = props => {
    const {
        items,
        actions,
        visibilityFilter
    } = props;

    return (
        <View style={styles.container}>
            <ButtonFilter
                filter='SHOW_ALL'
                txtStyle={styles.text}
                activeStyle={styles.btnClicked}
                unactiveStyle={styles.btnUnclicked}
                activeOpacity={0.7}
                {...props}
            >Show All
                </ButtonFilter>
            <ButtonFilter
                filter='SHOW_ACTIVE'
                txtStyle={styles.text}
                activeStyle={styles.btnClicked}
                unactiveStyle={styles.btnUnclicked}
                activeOpacity={0.7}
                {...props}
            >Active
                </ButtonFilter>
            <ButtonFilter
                filter='SHOW_COMPLETED'
                txtStyle={styles.text}
                activeStyle={styles.btnClicked}
                unactiveStyle={styles.btnUnclicked}
                activeOpacity={0.7}
                {...props}
            >Comlpeted
                </ButtonFilter>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 12
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: 'transparent',
        margin: 5,
        marginRight: 20,
        marginLeft: 20
    },
    btnClicked: {
        borderRadius: 5,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    btnUnclicked: {
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    }
});

export default Visibility;
