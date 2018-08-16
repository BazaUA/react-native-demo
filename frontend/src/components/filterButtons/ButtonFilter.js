import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonFilter = props => {
    const {
        filter,
        children,
        txtStyle,
        activeOpacity,
        visibilityFilter,
        activeStyle,
        unactiveStyle,
        setVisibilityFilter
    } = props;

    // console.log(visibilityFilter);
    const activeOrNot = (props.filter === visibilityFilter) ? activeStyle : unactiveStyle;
    const oonPress = () => {
        console.log(filter, ' here');
        setVisibilityFilter(filter);
    };

    return (
        <TouchableOpacity
            activeOpacity={activeOpacity} style={activeOrNot} onPress={oonPress}
        >
            <Text style={txtStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default ButtonFilter;
